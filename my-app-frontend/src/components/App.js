// import '/App.css';
// import { useEffect, useState } from "react";
import { useState } from "react";
import PendingReview from "./PendingReview";
import ReviewForm from "./ReviewForm";
import Login from './Login';
import {Switch,Route} from "react-router-dom";
// import Reviews from "./Reviews";

function App() {
  // const [reviews, setReviews] = useState([])

  // useEffect(() =>{
  //   fetch('http://localhost:9292/reviews')
  //    .then(response => response.json())
  //    .then(reviewData => {
  //     // console.log(reviewData)
  //     setReviews(reviewData)
  // }, []) }) 


const [currentUser,setCurrentUser] =  useState(null)


const changeUser = (user) => 
{
  setCurrentUser(user)
}


	return (
		<div className="App">

			{/* <ReviewForm reviews = {reviews} setReviews = {setReviews} /> */}
      {/* <Reviews  /> */}
     
      <Switch>
        
			<Route exact path = "/books" > <PendingReview  /></Route>
     <Route  path  = "/login" ><Login changeUser={changeUser}/></Route>
 
      </Switch>
      
		</div>
	);
}

export default App;
