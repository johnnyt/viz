# -*- encoding: utf-8 -*-
require File.expand_path '../lib/viz/version', __FILE__

$VIZ = Gem::Specification.new do |gem|
  gem.authors       = ['JohnnyT']
  gem.email         = ['ubergeek3141@gmail.com']
  gem.description   = 'Vizualize MagLev'
  gem.summary       = 'Viz provides a Sinatra app to let you see and interact with a MagLev enrionment.'
  gem.homepage      = 'https://github.com/johnnyt/viz'
  gem.license       = 'MIT'

  gem.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  gem.files         = `git ls-files`.split("\n")
  gem.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  gem.name          = 'viz'
  gem.require_paths = ['lib']
  gem.version       = Viz::VERSION

  gem.add_dependency 'sinatra', '~> 1.4.4'
  gem.add_dependency 'sinatra-contrib', '~> 1.4.2'
  gem.add_dependency 'multi_json', '= 1.3.6'

  gem.add_development_dependency 'rake', '~> 10.1.1'
  gem.add_development_dependency 'minitest', '~> 5.2.2'
  gem.add_development_dependency 'rack-test', '~> 0.6.2'
  gem.add_development_dependency 'simplecov', '~> 0.8.2'
end
