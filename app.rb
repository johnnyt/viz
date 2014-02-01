require File.expand_path '../environment', __FILE__

class VizApp < ::Sinatra::Base
  configure do
    enable :raise_errors, :logging, :show_exceptions
    register ::Sinatra::Namespace

    # Set default content type to json
    before do
      content_type :json
    end
  end

  helpers JsonHelpers

  get '/' do
    json(message: 'hello world')
    #json({ status: 'success', message: 'API v1' })
  end
end

module JsonHelpers
  def json(hash)
    MultiJson.dump(hash, pretty: true)
  end

  def parsed_params
    if request.get? || request.form_data?
      parsed = params
    else
      parsed = MultiJson.load(request.body, symbolize_keys: true)
    end

    parsed = {} unless parsed.is_a?(Hash)

    return parsed
  end
end
