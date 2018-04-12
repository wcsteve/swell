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

class Route < ApplicationRecord
  validates :title, :description, :distance,
  :distance_unit, :duration, :elevation_gain, :polyline, presence: true

  belongs_to :user,
    optional: true,
    foreign_key: :user_id,
    class_name: :User

  has_many :workouts,
    foreign_key: :route_id,
    class_name: :Workout

end

# dependent: :destroy,
