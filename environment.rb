ENV['RACK_ENV'] ||= 'development'
RACK_ROOT = File.expand_path '..', __FILE__
require 'sinatra/base'

#Dir['./lib/*.rb'].each{ |file| require file }
Dir['./models/*.rb'].each{ |file| require file }
