import React, {useState} from "react"



const ReviewForm = ({reviews, setReviews, book_id,user_id,setUserid}) => {

//    const [formData, setFormData] = useState({
//     id: '',
//     comment: '',
//     book_rating: ''
// })
const [rating,setRating] = useState(0)
const [comment,setComment] =useState("");


const handleChangeComment = (e) => {

  setComment((e.target.value))
 
};

const handleChangeRating =(e) => {

  setRating((e.target.value))
}

const reviewObj = {
  id: '',
  comment: comment,
  book_rating: rating,
  book_id: book_id,
  user_id: user_id
}




const handleSubmit = (e) => {
  e.preventDefault()
  const configObj = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(reviewObj)
  };
  fetch("http://localhost:9292/reviews", configObj)
  .then(response => response.json())
  .then((review) => {
    console.log(review)
    setReviews([...reviews, review])
    setUserid(user_id+1)
  })
}


	return (

		<div>
			<form onSubmit={handleSubmit} >
				<input  
        type="text" 
        name="name" 
        placeholder="Name"
        >
        </input>
				<textarea 
        onChange={handleChangeComment} 
        placeholder="Review"
        value ={comment}>

        </textarea>
				<select onChange={handleChangeRating} value ={rating}>
					<option value="0">0</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
        <button>Submit</button>
			</form>
		</div>
	);
};

export default ReviewForm;
