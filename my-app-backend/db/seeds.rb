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
description: "How trauma affects the body and mind, and innovative treatments for recovery.", genre: "NonFiction")
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
b = Book.create(   image_url: "https://storage.googleapis.com/du-prd/books/images/9780316499187.jpg", title: "TRIPLE CROSS", author: "James Patterson",
description: "Detective Alex Cross and the true-crime author Thomas Tull search for a serial killer known as the Family Man.", genre: "Fiction")
b3 = Book.create(  image_url: "https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg", title: "IT ENDS WITH US", author: " Colleen Hoover",
description: "A battered wife raised in a violent home attempts to halt the cycle of abuse.", genre: "Fiction")
b6 = Book.create(  image_url: "https://storage.googleapis.com/du-prd/books/images/9780593237465.jpg", title: "THE LIGHT WE CARRY", author: "Michelle Obama",
description: "The former first lady shares personal stories and the tools she uses to deal with difficult situations.", genre: "NonFiction")


  Review.create(book_rating: 8, comment: 'This one might be my favorite of the series. It was truly gripping and I was even tempted to bite my nails, especially toward the explosive ending!', book_id: b1.id, user_id: u1.id)
  Review.create(book_rating: 3, comment: 'It was good to spend time in Three Pines but the mystery felt way too convoluted and contingent.', book_id: b1.id, user_id: u1.id)
  Review.create(book_rating: 1, comment: 'Louise Penny lost me on this one. Too disturbing, creepy, and horrific. Was that really necessary? I didnt quite finish it.', book_id: b1.id, user_id: u1.id)
  Review.create(book_rating: 9, comment: 'THIS WAS EVERYTHING I WANTED AND MORE. goodbye. i’m so happy.
    “you’re going to drive five miles just to give me a hug?”
    “i’d run five miles just to give you a hug.” <3', book_id: b2.id, user_id: u2.id)
  Review.create(book_rating: 4, comment: "I didn't love it, I didn't hate it. I honestly wasn't sure what to expect, or more like I didn't have the highest of expectations, just because this book was never supposed to be written... and that probably should've stayed the case? ISWU felt like a long, dragged out epilogue for IEWU. If this was just a bonus novella, it probably could've been stronger!", book_id: b2.id, user_id: u2.id)
  Review.create(book_rating: 1, comment: 'Read this book out of curiosity but I think I really should have just stayed curious ', book_id: b2.id, user_id: u2.id)
  Review.create(book_rating: 10, comment: "I started reading this only this morning and have just finished reading the last page five hours later. I could not put this down. I was so emotionally invested in this story from the very first page. I have been putting off reading Colleen Hoover for a very long time due to fear of disappointment but it's safe to say I'm so glad I finally got around to reading this one.
    Do check trigger warnings if you are going to read this one though!", book_id: b3.id, user_id: u3.id)
  Review.create(book_rating: 6, comment: "After a re-read, I've realized that the first time I cried, it wasn't over this book or Lily's situation or her relationship or anything. It was mostly because of the emotions it triggered in me regarding my own relationship with my mom, but that's about all.", book_id: b3.id, user_id: u3.id)
  Review.create(book_rating: 1, comment: 'Incredibly predictable, highly overrated and full of characters and ridiculous moments I disliked.', book_id: b3.id, user_id: u3.id)
  Review.create(book_rating: 9, comment: '*Laughs hysterically* What?!
    Three hours later and I’m still laughing and head-shaking at the mindfuck that was this story....', book_id: b4.id, user_id: u2.id)
  Review.create(book_rating: 5, comment: 'Eh, cliche thriller at times. I know it’s not her normal style and the twist is a little interesting but it’s not a gripping novel by any means.
    It’s an effortless read though, not boring, but too steamy for me - as in, not enough story because there’s so much steam it takes up a ton of the book. And the steam itself, very gritty.', book_id: b4.id, user_id: u2.id)
  Review.create(book_rating: 1, comment: 'wasn’t sure what to rate this at first, but after some thought, i have decided to give it a 1 star because it was very disturbing and it left me feeling like i wish i had not read it. 😣', book_id: b4.id, user_id: u2.id)
  Review.create(book_rating: 10, comment: 'John Grisham is one of my favorite authors. I have read every book he has published. What a story! There are so many plot twists…I could not put this one down! Fans of legal thrillers will enjoy this one!', book_id: b5.id, user_id: u3.id)
  Review.create(book_rating: 6, comment: 'I’m a John Grisham fan. Anyone familiar with his work can attest to the fact that he is truly a talented writer, the proof of which is a scrolling list of best sellers. With all that said, The Boys from Biloxi just didn’t meet my expectations.', book_id: b5.id, user_id: u3.id)
  Review.create(book_rating: 1, comment: "I didn't make it past chapter 5 before DNF. No review would do my 1-rating justice. I am finding I just cannot get into Grisham.", book_id: b5.id, user_id: u3.id)
  Review.create(book_rating: 9, comment: 'Powerful, inspiring, insightful & universally relatable.
    This book would make a great holiday gift for one’s self or others; timely as it might help reader set New Year’s goals/intentions. I listened to the audiobook, narrated by the author; afterwards, bought the hardback as a gift.', book_id: b6.id, user_id: u3.id)
  Review.create(book_rating: 4, comment: 'Love Michelle, and loved “Becoming,” but this book felt like an unnecessary quasi-sequel with no central aim. I felt like she was grasping at straws for how to fill pages, with repetitive anecdotes, unoriginal messages, and honestly, boring prose. But then again, it’s Michelle, so I can’t not recommend this!', book_id: b6.id, user_id: u3.id)
  Review.create(book_rating: 1, comment: 'Not what I thought it would be - I was waiting for great enlightenments - more about the past 🙁🙁', book_id: b6.id, user_id: u3.id)
  Review.create(book_rating: 8, comment: 'I love Matthew Perry and I loved listening to him narrate this very raw and emotional memoir.', book_id: b7.id, user_id: u2.id)
  Review.create(book_rating: 6, comment: "The timeline of this memoir was just too chaotic for me. I appreciate Perry's vulnerability and honesty, but felt lost most of the way through the book.", book_id: b7.id, user_id: u2.id)
  Review.create(book_rating: 3, comment:"I commend Matthew's honesty in talking about a very serious, decades long addiction to alcohol and drugs.
    I listened on audio and I found it hard to follow, timeline wise. It jumps around constantly and I found it repetitive.", book_id: b7.id, user_id: u2.id)
  Review.create(book_rating: 10, comment: "this is one of my favorite celeb memoirs I've read. I was not aware of the author's work as a child actress (I'm about 5 years too old to have been in the tank for iCarly), but I thought her exploration of both abusive mothering relationships and the toxicity of stage parents/forcing kids into acting was really well observed", book_id: b8.id, user_id: u1.id)
  Review.create(book_rating: 6, comment: 'Very easy listen on audio that can be done in a workday. I think the hype had me expecting more, but it’s a good listen. At times dark, but Jeanette brings humor to it as well.', book_id: b8.id, user_id: u1.id)
  Review.create(book_rating: 2, comment: 'the book is poignant and serves a purpose but definitely needed an editor or a stronger writer helping. jennette has been through some emotionally heavy things but her words read like fan fiction and the dialogue is poorly written.', book_id: b8.id, user_id: u1.id)
  Review.create(book_rating: 10, comment: 'Brilliant work. An absolute must read/listen for trauma survivors, professionals who work with them, as well as family members of those who have endured extreme adversity. One of the best books on this topic that I have come across. Warmly recommende', book_id: b9.id, user_id: u3.id)
  Review.create(book_rating: 6, comment: "This is like an introductory textbook, covering lots of sub-topics one chapter at a time except that it's meant to be a book for the general public. There's an unfortunate amount of inside baseball verbiage that should have been edited out. If one slogs through it, there are many good points. For example, for child abuse the most effective interventions are the preventive ones.", book_id: b9.id, user_id: u1.id)
  Review.create(book_rating: 1, comment: 'Interesting case studies, but little in the way of practical applications you can use.', book_id: b9.id, user_id: u2.id)
  Review.create(book_rating: 10, comment: "The last 15 minutes of this audible book is what Alex Cross fans have been waiting for - can't wait for the next book!", book_id: b.id, user_id: u2.id)
  Review.create(book_rating: 7, comment: 'Triple Cross not as good as prior Alex Cross novels.
    I found this book more difficult to read because there were too many characters to follow with very little depth. Not written by James Patterson.', book_id: b.id, user_id: u2.id)
  Review.create(book_rating: 4, comment: 'Too many unbelievable turns and twists
    I am a James Patterson/ Alex Cross fan but I couldn’t wait for his one to end! Too many confusing twists and no real ending!', book_id: b.id, user_id: u2.id)




puts "✅ Done seeding!"