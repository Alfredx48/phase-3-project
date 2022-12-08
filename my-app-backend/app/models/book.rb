class Book < ActiveRecord::Base
has_many :reviews
has_many :users, through: :reviews


  def average_rating
  
  self.reviews.average(:book_rating).to_i
  end

  def self.best_book
 best_book =  Book.all.max_by do |book| 
    book.average_rating
  end

  end

  def self.top_books
    best_books = Book.all.sort_by {|book| book.average_rating}.reverse.each do |book|
    end
  
  end
end