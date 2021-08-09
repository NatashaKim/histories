require 'test_helper'

class HistoriesCatalogControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get histories_catalog_index_url
    assert_response :success
  end

end
