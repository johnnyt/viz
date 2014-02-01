ENV['RACK_ENV'] = 'test'
require 'rubygems'
require 'minitest/autorun'
require 'rack/test'

require File.expand_path '../../viz_app', __FILE__

def app
  VizApp
end
