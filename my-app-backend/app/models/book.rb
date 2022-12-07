class Book < ActiveRecord::Base
has_many :reviews
has_many :users, through: :reviews


def average_rating

  self.reviews.sum(:book_rating) / self.reviews.size 
end

def self.best_book
 best_book =  Book.all.map do |book| 
    book.average_rating
    end
    highest_book = best_book.each_with_index.max.second
    Book.where(:id => highest_book)
  end

def highest_rating
  self.reviews.order(book_rating: :desc)
end

def self.highest_book
  maped_books = Book.all.map do |book|
    book.highest_rating.sort_by(&:book_rating).reverse
    end
end
  


end