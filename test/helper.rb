ENV['RACK_ENV'] = 'test'
require 'rubygems'

# Only run coverage in MRI
unless defined? Maglev
  if ENV['CI']
    require 'coveralls'
    Coveralls.wear!
  else
    require 'simplecov'
    SimpleCov.start 'Gem'
  end
end

require 'minitest/autorun'
require 'minitest/pride'
require 'rack/test'

Dir[File.expand_path('../support/*.rb', __FILE__)].each { |file| require file }
require File.expand_path '../../app', __FILE__
