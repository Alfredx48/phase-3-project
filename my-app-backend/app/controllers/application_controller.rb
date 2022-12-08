class ApplicationController < Sinatra::Base
  set :default_content_type, "application/json"

  # Add your routes here

  get "/" do
    books = Book.all
    books.to_json(include: { reviews: { include: :user } })
  end

  get "/logins/:username/:password" do
    login = Login.find_by(username: params[:username], password: params[:password])
    if login 
      login.to_json
    else
      status 401
      { error: "User dosent exist" }.to_json
    end
  end
  
    get "/best" do
      books = Book.best_book
      books.to_json
    end

    get "/top_books" do 
        books = Book.top_books
        books.to_json
    end

  get "/books" do
    books = Book.all
    books.to_json
  end

  get "/books/:id" do
    books_id = Book.find(params[:id])
    books_id.to_json
  end

  post "/books" do
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

  post "/reviews" do
    reviews = Review.create(params)
    reviews.to_json
  end

  get "/*" do
    "404 NOT FOUND"
  end
end
