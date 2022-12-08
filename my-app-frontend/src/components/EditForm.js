import { useState } from "react";

const EditForm = ({id, editReview, book_id}) => {
	const [editC, setEditC] = useState("");
	const [editR, setEditR] = useState(0);

	const handleChangeC = (e) => {
		setEditC(e.target.value);
	};

	const handleChangeR = (e) => {
		setEditR(e.target.value);
	};

	const handleEditSubmit = (e) => {
		e.preventDefault();
		const editReviewObj = {
			comment: editC,
			book_rating: editR,
      book_id: book_id
		};

		const configObj = {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(editReviewObj),
		};
		fetch(`http://localhost:9292/reviews/${id}`, configObj)
			.then((response) => response.json())
		  .then(updatedReview => {
        // console.log(updatedReview)
        editReview(id, book_id, updatedReview)
      })
	};

  console.log(id, book_id)


	return (
		<div className="form">
			<form onSubmit={handleEditSubmit}>
				<input type="text" name="name" placeholder="Name"></input>
				<br />

				<br />
				<textarea
					onChange={handleChangeC}
					placeholder="Review"
					value={editC}
				></textarea>
				<br />
				<select onChange={handleChangeR} value={editR}>
					<option value="0">0</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
				</select>
				<br />
				<br />
				<button>Submit</button>
			</form>
		</div>
	);
};

export default EditForm;
