import React, {useEffect, useState} from 'react'


const PendingReview = () => {
  const [books, setBooks] = useState([])

  useEffect(() =>{ 
    fetch("http://localhost:9292/books")
     .then(response => response.json())
     .then(bookData => { 
      // console.log(bookData)
      setBooks(bookData)
    });
  
  }, 
    [])

    const mappedBooks = () => {
      return books.map(book => {
        return (
          <>
          <h1>{book.title}</h1>
          <h2>{book.author}</h2>
          <h2>{book.genre}</h2>
          <h2>{book.publisher}</h2>
          <button>click to review</button>
          <br />
          </>
        )
      })
    }


  return (
    <div>{mappedBooks()}</div>
  )
}

export default PendingReview