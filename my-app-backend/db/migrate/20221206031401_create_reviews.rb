class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :comment
      t.integer :book_rating
      t.belongs_to :book
      t.belongs_to :user
      t.timestamps
    end
  end
end
