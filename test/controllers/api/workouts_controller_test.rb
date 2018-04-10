require 'test_helper'

class Api::WorkoutsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_workouts_create_url
    assert_response :success
  end

  test "should get updateindex" do
    get api_workouts_updateindex_url
    assert_response :success
  end

  test "should get show" do
    get api_workouts_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_workouts_destroy_url
    assert_response :success
  end

end
