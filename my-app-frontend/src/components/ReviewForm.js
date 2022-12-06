import React, {useState} from "react"

const ReviewForm = ({reviews, setReviews}) => {

   const [formData, setFormData] = useState({
    id: '',
    comment: '',
    book_rating: ''
})


// const handleChange = (e) => {
//   setFormData((prevState) => {
//     return {
//       ...prevState,
//       [e.target.name]: e.target.value,
//     };
//   });
// };

const handleChange = (e) => {
  
}


const handleSubmit = (e) => {
  e.preventDefault()
  const configObj = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(formData)
  };
  fetch("http://localhost:9292/reviews", configObj)
  .then(response => response.json())
  .then((review) => {
    console.log(review)
    setReviews([...reviews, review])
  })
}



	return (
		<div>
			<form onSubmit={handleSubmit} >
				<input  
        onChange={handleChange} 
        type="text" 
        name="name" 
        placeholder="Name"
        >
        </input>
				<textarea 
        onChange={handleChange} 
        placeholder="Review"
         value ={formData.comment}>

        </textarea>
				<select onChange={handleChange} >
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
