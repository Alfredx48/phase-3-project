class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get "/books" do 
    books = Book.all
    books.to_json(include: :reviews)
  end

  get '/books/:id' do

    books_id = Book.find(params[:id])
    books_id.to_json

  end

#   get '/best' do 
#   books= Book.first.reviews.order(params[:book_rating])
#   binding.pry
#   books.to_json
# end

  post '/books' do
    books = Book.create(params)
    books.to_json
  end

  get "/users" do 
    users = User.all
    users.to_json
  end

  get "/reviews" do 
    reviews = Review.all
    reviews.to_json
  end

  post '/reviews' do
    reviews = Review.create(params)
    reviews.to_json
  end



  get "/*" do 
    "404 NOT FOUND"
  end

end
