require File.expand_path '../helper', __FILE__

class TestVizApp < Minitest::Test
  include Rack::Test::Methods

  def app
    VizApp
  end

  def test_hello_world
    get '/'
    File.open('resp.html', 'w+'){|f| f.write last_response.body }
    assert last_response.ok?
  end
end
