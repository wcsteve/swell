class CreateRoutes < ActiveRecord::Migration[5.1]
  def change
    create_table :routes do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.float :distance, null: false
      t.string :distance_unit, null: false, default: "miles"
      t.string :duration, null: false
      t.string :elevation_gain, null: false
      t.string :elevation_unit, null: false
      t.text :polyline, null: false

      t.timestamps
    end

    add_index :routes, :user_id
    add_index :routes, [:user_id, :title], unique: true
  end
end
