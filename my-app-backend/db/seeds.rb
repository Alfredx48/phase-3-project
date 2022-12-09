require 'faker'

Book.destroy_all
User.destroy_all
Review.destroy_all




puts "🌱 Seeding spices..."

u1 = User.create(username:"Nik", password: "123")
u2 = User.create(username:"Alfred", password: "456")
u3 = User.create(username:"Chris", password: "789")
# u4= User.create(name: Faker::Name.name)
# u5 = User.create(name: Faker::Name.name)
# u6 = User.create(name: Faker::Name.name)
# u7 = User.create(name: Faker::Name.name)
# u8 = User.create(name: Faker::Name.name)
# u9 = User.create(name: Faker::Name.name)
# u = User.create(name: Faker::Name.name)

b9 = Book.create(  image_url: "https://storage.googleapis.com/du-prd/books/images/9780670785933.jpg", title: "THE BODY KEEPS THE SCORE", author: "Bessel van der Kolk",
description: "How trauma affects the body and mind, and innovative treatments for recovery.", genre: "")
b2 = Book.create(  image_url: "https://storage.googleapis.com/du-prd/books/images/9781668001226.jpg", title: "IT STARTS WITH US", author: "Colleen Hoover", 
description: "In the sequel to “It Ends With Us,” Lily deals with her jealous ex-husband as she reconnects with her first boyfriend.", genre: "Fiction")
b8 = Book.create(  image_url: "https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg", title: "I'M GLAD MY MOM DIED", author: "Jennette McCurdy", 
description: "The actress and filmmaker describes her eating disorders and difficult relationship with her mother.
", genre: "NonFiction")
b4 = Book.create(  image_url: "https://storage.googleapis.com/du-prd/books/images/9781791392796.jpg", title: "VERITY", author: "Colleen Hoover", 
description: "Lowen Ashleigh is hired by the husband of an injured writer to complete her popular series and uncovers a horrifying truth.", genre: "Fiction")
b1 = Book.create(  image_url: "https://storage.googleapis.com/du-prd/books/images/9781250145291.jpg", title:"A WORLD OF CURIOSITIES", author:" Louise Penny", 
description:"The 18th book in the Chief Inspector Gamache series. When an attic room that was sealed off 160 years ago is opened, an old enemy returns.", genre: "Fiction")
b5 = Book.create(  image_url: "https://storage.googleapis.com/du-prd/books/images/9780385548922.jpg", title: "THE BOYS FROM BILOXI", author: "John Grisham",  description: "Two childhood friends follow in their fathers’ footsteps, which puts them on opposite sides of the law.", genre: "Fiction")
b7 = Book.create(  image_url: "https://storage.googleapis.com/du-prd/books/images/9781250866448.jpg", title: "FRIENDS, LOVERS, AND THE BIG TERRIBLE THING", author: "Matthew Perry", 
description: "The actor, known for playing Chandler Bing on “Friends,” shares stories from his childhood and his struggles with sobriety.", genre: "NonFiction")
b = Book.create(   image_url: "https://storage.googleapis.com/du-prd/books/images/9780525521044.jpg", title: "SURRENDER", author: "Bono",
description: "The lead singer of the Irish rock band U2 offers details of his life, career and activism.", genre: "NonFiction")
b3 = Book.create(  image_url: "https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg", title: "IT ENDS WITH US", author: " Colleen Hoover",
description: "A battered wife raised in a violent home attempts to halt the cycle of abuse.", genre: "Fiction")
b6 = Book.create(  image_url: "https://storage.googleapis.com/du-prd/books/images/9780593237465.jpg", title: "THE LIGHT WE CARRY", author: "Michelle Obama",
description: "The former first lady shares personal stories and the tools she uses to deal with difficult situations.", genre: "NonFiction")


  Review.create(book_rating: 6, comment: 'wow', book_id: b1.id, user_id: u1.id)
  Review.create(book_rating: 3, comment: 'great', book_id: b2.id, user_id: u2.id)
  Review.create(book_rating: 1, comment: 'amazing', book_id: b3.id, user_id: u3.id)
  Review.create(book_rating: 7, comment: 'boring', book_id: b4.id, user_id: u2.id)
  Review.create(book_rating: 4, comment: 'bad', book_id: b5.id, user_id: u3.id)
  Review.create(book_rating: 8, comment: 'amazing', book_id: b6.id, user_id: u3.id)
  Review.create(book_rating: 10, comment: 'too long', book_id: b7.id, user_id: u2.id)
  Review.create(book_rating: 2, comment: 'too short', book_id: b8.id, user_id: u1.id)
  Review.create(book_rating: 5, comment: 'nice', book_id: b9.id, user_id: u3.id)
  Review.create(book_rating: 9, comment: 'good', book_id: b.id, user_id: u2.id)




puts "✅ Done seeding!"
