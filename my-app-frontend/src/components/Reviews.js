import {useEffect, useState} from 'react'

const Reviews = ({reviews}) => {

const mappedReviews = () => {
  return reviews.map(review => {
    return (
      <>
      <h1>{review.comment}</h1>
      <h2>{review.book_rating}</h2>
      </>
    )
  })
}

  return (
    <div>
      {mappedReviews()}
    </div>
  )
}

export default Reviews