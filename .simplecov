require 'simplecov'
require 'coveralls'

SimpleCov.formatter = SimpleCov::Formatter::MultiFormatter[
  SimpleCov::Formatter::HTMLFormatter,
  Coveralls::SimpleCov::Formatter
]

SimpleCov.maximum_coverage_drop 3

SimpleCov.adapters.define 'minitest' do
  command_name 'minitest'
  add_group 'Applications', 'app'
  add_filter 'test'
end

# vim: syntax=ruby
