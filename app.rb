require File.expand_path '../environment', __FILE__

class VizApp < ::Sinatra::Base
  helpers Sinatra::JSON

  configure do
    enable :raise_errors, :logging, :show_exceptions
  end

  get '/' do
    json :message => 'hello world'
  end
end
