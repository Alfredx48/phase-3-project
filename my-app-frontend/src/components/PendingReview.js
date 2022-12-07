import React, { useEffect, useState } from "react";
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

const PendingReview = () => {
	const [reviews, setReviews] = useState([]);

	const [books, setBooks] = useState([]);

	const [clickReview, setClickReview] = useState(false);

	const clickReviewTrue = () => setClickReview(!clickReview);

	const [users, setUsers] = useState(1);

	useEffect(() => {
		fetch("http://localhost:9292/books")
			.then((response) => response.json())
			.then((bookData) => {
				console.log(bookData);
				setBooks(bookData);
			});
	}, []);

	const mappedBooks = () => {
		return books.map((book) => {
			const mappedComments = () => {
				return book.reviews.map((br) => {
					return (
						<>
							<h1> Rating : {br.book_rating}</h1>
							<h2>Comment : {br.comment}</h2>
						</>
					);
				});
			};
			return (
        <>
				<div className="reviews">
					<motion.div
						variants={variants}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						
					>
						<div>
							<h1>Title: {book.title}</h1>
							<h2>Author: {book.author}</h2>
							<h2>Genre: {book.genre}</h2>
							<h2>Publisher: {book.publisher}</h2>
              <img src={book.image_url} alt = "book"/> 
							<h3>{mappedComments()}</h3>

						</div>
					</motion.div>
							<br />
					<div>
						{clickReview ? (
							<ReviewForm
								reviews={reviews}
								setReviews={setReviews}
								book_id={book.id}
								user_id={users}
								setUserId={setUsers}
							/>
						) : null}
						<br />
						<button onClick={clickReviewTrue}>click to review</button>
					</div>
				</div>
        <br/>
        </>
			);
		});
	};

	return (
		<div>
			{mappedBooks()}
			<Reviews reviews={reviews} />
		</div>
	);
};

export default PendingReview;
