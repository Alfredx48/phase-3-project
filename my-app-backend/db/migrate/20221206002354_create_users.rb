class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.timestamps
      # t.string :email
      # t.integer :password
    end
  end
end
