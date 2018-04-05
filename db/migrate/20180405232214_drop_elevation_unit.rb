class DropElevationUnit < ActiveRecord::Migration[5.1]
  def change
    remove_column :routes, :elevation_unit
  end
end
