ENV['RACK_ENV'] ||= 'development'
RACK_ROOT = File.expand_path '..', __FILE__
require 'sinatra/base'
require 'sinatra/json'
#require 'sinatra/namespace'
require 'multi_json'

require File.expand_path '../lib/maglev-database-explorer', __FILE__

Dir['./helpers/*.rb'].each{ |file| require file }
Dir['./models/*.rb'].each{ |file| require file }
