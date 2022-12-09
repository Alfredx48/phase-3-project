import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import EditForm from "./EditForm";
import Reviews from "./Reviews";

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

const BestBooks = () => {
	const [bestBooks, setBestBooks] = useState([]);


	useEffect(() => {
		fetch("http://localhost:9292/top_books")
			.then((response) => response.json())
			.then((bookData) => {
				// console.log(bookData);
				setBestBooks(bookData);
			});
	}, []);




	// BestBooks.map(bb => bb.id == targetId ? {…bb, reviews: [bb.reviews.filter(r => r.id != id)]} : bb)

	const deleteReview = (id, book_id) => {
	fetch(`http://localhost:9292/reviews/${id}`, {
		method: "DELETE",
	}) 
	.then((response) => response.json())
	.then(setBestBooks( bestBooks.map(bb => bb.id === book_id ? {...bb, reviews: bb.reviews.filter(r => r.id !== id)} : bb)))
	// console.log(bestBooks.map(bb => bb.id === book_id ? {...bb, reviews: [bb.reviews.filter(r => r.id !== id)]} : bb))

	};

	const editReview = (id, book_id, updatedReview) => {
		setBestBooks(	bestBooks.map(bb => bb.id === book_id ? {...bb, reviews: bb.reviews.map(r => r.id === id ? updatedReview : r)}:bb))
		// setToggleEdit(!toggleEdit)
		// console.log(id)
		// console.log(book_id)
	}



	const mappedBooks = () => {
		return bestBooks.map((book) => {
			return (
				<>
					<div className="reviews">
						{/* <motion.div
							variants={variants}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						> */}
							<div>
								<h1>{book.title}</h1>
								<h2>by {book.author}</h2>
								<p>{book.description}</p>
								<img src={book.image_url} alt="book" />
								<h2>Genre: {book.genre}</h2>
								{book.reviews.map((br) => <Reviews br={br} deleteReview = {deleteReview} editReview={editReview} />)}
							</div>
						{/* </motion.div> */}
						<div>
							<br />
						</div>
					</div>
					<br />
				</>
			);
		});
	};

	return <div>{mappedBooks()}</div>;
};

export default BestBooks;
