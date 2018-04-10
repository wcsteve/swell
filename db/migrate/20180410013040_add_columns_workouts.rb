class AddColumnsWorkouts < ActiveRecord::Migration[5.1]
  def change
    add_column :workouts, :created_at, :datetime, null: false
    add_column :workouts, :updated_at, :datetime, null: false
    add_column :workouts, :workout_date, :date, null: false
  end
end
