# == Schema Information
#
# Table name: workouts
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  title         :string           not null
#  route_id      :integer          not null
#  activity_type :string           default("run")
#  time          :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  workout_date  :date             not null
#

class Workout < ApplicationRecord
  validates :user_id, :title, :route_id, :time, presence: true
  validates :workout_date, presence: true

  belongs_to :route,
    foreign_key: :route_id,
    class_name: :Route

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User



end
