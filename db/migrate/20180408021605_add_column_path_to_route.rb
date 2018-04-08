class AddColumnPathToRoute < ActiveRecord::Migration[5.1]
  def change
    add_column :routes, :path, :text, array:true, default: []
  end
end
