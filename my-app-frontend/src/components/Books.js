import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";
import { motion } from "framer-motion";

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const Books = ({ books, currentUser }) => {
	const [reviews, setReviews] = useState([]);

	const [clickReview, setClickReview] = useState(false);

	const clickReviewTrue = () => setClickReview(!clickReview);

	const [users, setUsers] = useState(1);

	const mappedBooks = () => {
		return books.map((book) => {
			console.log(book);
			return (
				<>
					<div className="reviews">
						<motion.div
							variants={variants}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<div>
								<h1>{book.title}</h1>
								<h2> by {book.author}</h2>
								<p> {book.description}</p>
								<img src={book.image_url} alt="book" />
								<h2>Genre: {book.genre}</h2>
							</div>
						</motion.div>
						<br />
								<ReviewForm
									clickReview={clickReview}
									clickReviewTrue={clickReviewTrue}
									reviews={reviews}
									setReviews={setReviews}
									book_id={book.id}
									user_id={users}
									setUserId={setUsers}
								/>
						<div>
							<br />
							<button onClick={clickReviewTrue}>click to review</button>
						</div>
					</div>
					<br />
				</>
			);
		});
	};

	return (
		<div>
			<h1> Welcome {currentUser} </h1>
			{mappedBooks()}
			{/* <Reviews reviews={reviews} /> */}
		</div>
	);
};

export default Books;
