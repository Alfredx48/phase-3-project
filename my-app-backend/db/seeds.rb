require 'faker'

Book.destroy_all
User.destroy_all
Review.destroy_all




puts "🌱 Seeding spices..."

u1 = User.create(name: Faker::Name.name)
u2 = User.create(name: Faker::Name.name)
u3 = User.create(name: Faker::Name.name)
u4= User.create(name: Faker::Name.name)
u5 = User.create(name: Faker::Name.name)
u6 = User.create(name: Faker::Name.name)
u7 = User.create(name: Faker::Name.name)
u8 = User.create(name: Faker::Name.name)
u9 = User.create(name: Faker::Name.name)
u = User.create(name: Faker::Name.name)

b1 = Book.create(  image_url: Faker::LoremFlickr.image( search_terms:["book"],match_all: false), title: Faker::Book.title, author: Faker::Book.author, publisher: Faker::Book.publisher, genre: Faker::Book.genre)
b2 = Book.create(  image_url: Faker::LoremFlickr.image( search_terms:["book"],match_all: false), title: Faker::Book.title, author: Faker::Book.author, publisher: Faker::Book.publisher, genre: Faker::Book.genre)
b3 = Book.create(  image_url: Faker::LoremFlickr.image( search_terms:["book"],match_all: false), title: Faker::Book.title, author: Faker::Book.author, publisher: Faker::Book.publisher, genre: Faker::Book.genre)
b4 = Book.create(  image_url: Faker::LoremFlickr.image( search_terms:["book"],match_all: false), title: Faker::Book.title, author: Faker::Book.author, publisher: Faker::Book.publisher, genre: Faker::Book.genre)
b5 = Book.create(  image_url: Faker::LoremFlickr.image( search_terms:["book"],match_all: false), title: Faker::Book.title, author: Faker::Book.author, publisher: Faker::Book.publisher, genre: Faker::Book.genre)
b6 = Book.create(  image_url: Faker::LoremFlickr.image( search_terms:["book"],match_all: false), title: Faker::Book.title, author: Faker::Book.author, publisher: Faker::Book.publisher, genre: Faker::Book.genre)
b7 = Book.create(  image_url: Faker::LoremFlickr.image( search_terms:["book"],match_all: false), title: Faker::Book.title, author: Faker::Book.author, publisher: Faker::Book.publisher, genre: Faker::Book.genre)
b8 = Book.create(  image_url: Faker::LoremFlickr.image( search_terms:["book"],match_all: false), title: Faker::Book.title, author: Faker::Book.author, publisher: Faker::Book.publisher, genre: Faker::Book.genre)
b9 = Book.create(  image_url: Faker::LoremFlickr.image( search_terms:["book"],match_all: false), title: Faker::Book.title, author: Faker::Book.author, publisher: Faker::Book.publisher, genre: Faker::Book.genre)
b = Book.create(  image_url: Faker::LoremFlickr.image( search_terms:["book"],match_all: false), title: Faker::Book.title, author: Faker::Book.author, publisher: Faker::Book.publisher, genre: Faker::Book.genre)


  Review.create(book_rating: rand(1..10), comment: 'wow', book_id: b1.id, user_id: u1.id)
  Review.create(book_rating: rand(1..10), comment: 'great', book_id: b2.id, user_id: u2.id)
  Review.create(book_rating: rand(1..10), comment: 'amazing', book_id: b3.id, user_id: u3.id)
  Review.create(book_rating: rand(1..10), comment: 'boring', book_id: b4.id, user_id: u4.id)
  Review.create(book_rating: rand(1..10), comment: 'bad', book_id: b5.id, user_id: u5.id)
  Review.create(book_rating: rand(1..10), comment: 'amazing', book_id: b6.id, user_id: u6.id)
  Review.create(book_rating: rand(1..10), comment: 'too long', book_id: b7.id, user_id: u7.id)
  Review.create(book_rating: rand(1..10), comment: 'too short', book_id: b8.id, user_id: u8.id)
  Review.create(book_rating: rand(1..10), comment: 'nice', book_id: b9.id, user_id: u9.id)
  Review.create(book_rating: rand(1..10), comment: 'good', book_id: b.id, user_id: u.id)


  Login.create(username:"Nik")
  Login.create(username:"Alfred")
  Login.create(username:"Chris")

puts "✅ Done seeding!"
