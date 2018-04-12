class UpdateColumns < ActiveRecord::Migration[5.1]
  def change
    change_column_null :routes, :user_id, true
  end
end
