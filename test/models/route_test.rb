# == Schema Information
#
# Table name: routes
#
#  id             :integer          not null, primary key
#  user_id        :integer          not null
#  title          :string           not null
#  description    :text             not null
#  distance       :float            not null
#  distance_unit  :string           default("miles"), not null
#  duration       :string           not null
#  elevation_gain :string           not null
#  polyline       :text             not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class RouteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
