import React, {useEffect, useState} from 'react'

import ReviewForm from './ReviewForm'

import Reviews from './Reviews'



const PendingReview = () => {


  const [reviews, setReviews] = useState([])


  const [books, setBooks] = useState([])

  const [clickReview,setClickReview]= useState(false)

 const clickReviewTrue = ()=>setClickReview(!clickReview)

 const [users,setUsers] = useState(1)

// useEffect(() =>{
//     fetch('http://localhost:9292/reviews')
//      .then(response => response.json())
//      .then(reviewData => {
//       // console.log(reviewData)
//       setReviews(reviewData)
//   }, []) }) 




  useEffect(() =>{ 
    fetch("http://localhost:9292/books")
     .then(response => response.json())
     .then(bookData => { 
      // console.log(bookData)
      setBooks(bookData)
    });
  
  }, 
    [])

//  useEffect(() =>{ fetch("http://localhost:9292/users")
//     .then(response => response.json())
//     .then(userData => { 
//      // console.log(bookData)
//      setUsers(userData)
//    });
//  }, 
//    [])




    const mappedBooks = () => {
      
      
      return books.map(book => {
        return (
          <>
          <h1>{book.title}</h1>
          <h2>{book.author}</h2>
          <h2>{book.genre}</h2>
          <h2>{book.publisher}</h2>
          <button onClick={clickReviewTrue}>
         
            click to review</button>
            {
          clickReview ?  <ReviewForm reviews = {reviews} setReviews = {setReviews}  book_id={book.id} user_id={users} setUserid={setUsers}/>
              : null}
          <br />
          </>
        )
      })
    }


   


  return (
    <div>{mappedBooks()}
    {/* {<button > 
          /* { clickReview ?   <ReviewForm reviews = {reviews} setReviews = {setReviews} bookid={book.id} />
    : null} */} 
    <Reviews reviews={reviews} />
    </div>  

    
   

  )
}

export default PendingReview