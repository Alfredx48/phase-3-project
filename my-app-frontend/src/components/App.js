// import '/App.css';
import { useEffect, useState } from "react";
import PendingReview from "./PendingReview";
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";

function App() {
  const [reviews, setReviews] = useState([])

  useEffect(() =>{
    fetch('http://localhost:9292/reviews')
     .then(response => response.json())
     .then(reviewData => {
      // console.log(reviewData)
      setReviews(reviewData)
  }, []) }) 

	return (
		<div className="App">
			<ReviewForm reviews = {reviews} setReviews = {setReviews} />
      <Reviews reviews = {reviews} />
			<PendingReview />
		</div>
	);
}

export default App;
