require File.expand_path '../environment', __FILE__

class VizApp < ::Sinatra::Base
  helpers JsonHelpers

  configure do
    enable :raise_errors, :logging, :show_exceptions
    before{ content_type :json } # Set default content type to json
  end

  get '/' do
    json({message: 'hello world'})
    #json({ status: 'success', message: 'API v1' })
  end
end
