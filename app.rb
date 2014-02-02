require File.expand_path '../environment', __FILE__

class VizApp < ::Sinatra::Base
  helpers Sinatra::JSON
  #register Sinatra::Namespace

  configure do
    enable :raise_errors, :logging, :show_exceptions
  end

  get '/' do
    File.read(File.expand_path '../public/index.html', __FILE__)
    #json :message => "Hello world! (from #{RUBY_ENGINE})"
  end

  # Write Amber packages to disk
  put '/packages/:type/:package' do
    File.open("./packages/#{params[:type]}/#{params[:package]}", 'w+') do |file|
      file.write request.body.read
    end
    'success'
  end
end

require './routes/object_routes'
