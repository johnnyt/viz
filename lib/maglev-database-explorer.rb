$LOAD_PATH.unshift(File.expand_path '..', __FILE__)

module MaglevDatabaseExplorer
  def self.full_gem_path
    gem = Gem.loaded_specs["maglev-database-explorer"]
    gem.full_gem_path
  end

  def self.eval_object
    @eval_object ||= Object.new
  end
end

if defined? Maglev
#require "maglev-database-explorer/engine"
require "maglev-database-explorer/database_views"
#require "maglev-database-explorer/engine_symlinks"
require "maglev-database-explorer/ruby_workspace"
require "maglev-database-explorer/code_evaluation"
require "maglev-database-explorer/debug_server"
require "maglev-database-explorer/debug_storage"
require "maglev-database-explorer/halt"
end
#
## Workaround for Engines not working correctly on MagLev
#module MaglevDatabaseExplorer
#  #module ApplicationHelper                                                   #
#
#  #end
#
#  #class ApplicationController < ActionController::Base
#  #end
#end
