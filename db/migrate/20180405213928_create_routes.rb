class CreateRoutes < ActiveRecord::Migration[5.1]
  def change
    create_table :routes do |t|
      t.integer :user_id
      t.string :title
      t.text :description
      t.float :start_lat
      t.float :start_lng
      t.float :end_lat
      t.float :end_lng
      t.float :distance
      t.string :distance_unit
      t.string :duration
      t.string :elevation_gain
      t.string :elevation_unit
      t.boolean :private
      t.text :mapped_route

      t.timestamps
    end
  end
end
