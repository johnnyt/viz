ENV['RACK_ENV'] = 'test'
require 'rubygems'
require 'minitest'
require 'minitest/autorun'
require 'rack/test'

# Only run coverage in MRI
unless defined? Maglev
  if ENV['CI']
    require 'coveralls'
    Coveralls.wear!
  else
    require 'simplecov'
    SimpleCov.start
  end
end

Dir[File.expand_path('../support/*.rb', __FILE__)].each { |file| require file }
require File.expand_path '../../app', __FILE__
