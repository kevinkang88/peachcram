class CreateYtplayers < ActiveRecord::Migration
  def change
    create_table :ytplayers do |t|

      t.timestamps
    end
  end
end
