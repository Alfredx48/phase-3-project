
import {useState} from 'react'
import EditForm from './EditForm';

const Reviews = ({br, deleteReview, editReview}) => {
	const [toggleEdit, setToggleEdit] = useState(false);

	return (
		<>
			 <h2> {br.book_rating}/10</h2> 
			 <p> {br.comment}</p> 
			<button onClick={() => deleteReview(br.id, br.book_id)}>delete</button>
			<button onClick={() => setToggleEdit(!toggleEdit)} >Edit</button>
			<br/>
			<br/>
			{toggleEdit ? <EditForm id = {br.id} book_id = {br.book_id} editReview={editReview} /> : null}
		</>
	);
}

export default Reviews
