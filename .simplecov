require 'simplecov'
require 'coveralls'

SimpleCov.formatter = SimpleCov::Formatter::MultiFormatter[
  SimpleCov::Formatter::HTMLFormatter,
  Coveralls::SimpleCov::Formatter
]

SimpleCov.maximum_coverage_drop 3

SimpleCov.start do
  command_name 'minitest'
  add_group 'Application', 'app'
  add_filter 'test'
end

# vim: syntax=ruby
