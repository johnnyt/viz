require File.expand_path '../environment', __FILE__
require 'sinatra/base'

class VizApp < Sinatra::Base
  get '/' do
    'hello world'
  end
end
