class VizApp < ::Sinatra::Base
  def store_object(obj)
    MaglevDatabaseExplorer.store_debug_object(obj)
  end

  get '/object/index/:id' do
    id = params[:id].to_i
    ranges = {}

    params.each_pair do |key, value|
      parts = key.split("_")

      if parts[0] == "range"
        ranges[parts[1].to_sym] = [params["range_#{parts[1]}_from"], params["range_#{parts[1]}_to"]]
     end
   end

    depth = (params[:depth] || 2).to_i

    json({:success => true, :result => ObjectSpace._id2ref(id).to_database_view(depth, ranges, params)})
  end

  get '/object/evaluate/:id' do
    obj_id = Integer(params[:id])
    obj = ObjectSpace._id2ref(obj_id)
    code = params[:code]
    language = params[:language]
    depth = params[:depth] ? Integer(params[:depth]) : 2
    ranges = {}

    if obj == nil and obj_id != 20
      render :json => {:success => false, :exception => "object not found"}
    else
      result = CodeEvaluation.wait_for_eval_thread do
        if language == "smalltalk"
          obj.__evaluate_smalltalk(code)
        elsif language == "ruby"
          obj.instance_eval(code)
        elsif language == "rubyClass"
          obj.module_eval(code)
        end
      end

      store_object(result)

      if result[0]
        # exception was caught
        json({:success => true, :result => [true, result[1].to_database_view(1, ranges, params)]})
      else
        # no exception was caught
        json({:success => true, :result => [false, result[1].to_database_view(depth, ranges, params)]})
      end
    end
  end
end
