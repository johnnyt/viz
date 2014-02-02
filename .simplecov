require 'simplecov'
#require 'coveralls'

#SimpleCov.formatter = SimpleCov::Formatter::MultiFormatter[
#  SimpleCov::Formatter::HTMLFormatter,
#  Coveralls::SimpleCov::Formatter
#]

SimpleCov.profiles.define 'Gem' do
  #maximum_coverage_drop 3

  command_name 'minitest'

  add_group 'Application', 'app'
  add_group 'Helpers', 'helpers'

  add_filter 'lib/maglev-database-explorer'
  add_filter 'environment.rb'
  add_filter 'test'
end

# vim: syntax=ruby
