require File.expand_path '../helper', __FILE__

class TestVizApp < Minitest::Test
  include Rack::Test::Methods

  def app
    VizApp
  end

  def test_hello_world
    get '/'
    assert last_response.ok?
  end
end
