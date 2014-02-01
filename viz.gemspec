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

  gem.add_dependency 'sinatra', '~> 0'
  gem.add_dependency 'multi_json', '~> 0'

  gem.add_development_dependency 'rake', '~> 0'
  gem.add_development_dependency 'rack-test', '~> 0.6.1'
  gem.add_development_dependency 'mocha', '~> 0.14.0'
  gem.add_development_dependency 'simplecov', '~> 0'
  gem.add_development_dependency 'coveralls', '~> 0'
end
