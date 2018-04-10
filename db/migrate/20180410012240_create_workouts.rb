class CreateWorkouts < ActiveRecord::Migration[5.1]
  def change
    create_table :workouts do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.integer :route_id, null: false
      t.string :activity_type, default: "run"
      t.string :time, null: false
    end

    add_index :workouts, [:user_id, :title], unique: true
  end
end
