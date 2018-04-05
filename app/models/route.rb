class Route < ApplicationRecord
  validates :user_id, :title, :description, :distance,
  :distance_unit, :duration, :elevation_gain, :polyline, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

end
