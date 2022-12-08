import {useEffect, useState} from "react";
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

const BestBooks = () => {
	const [bestBooks, setBestBooks] = useState([])

	useEffect(() => {
		fetch("http://localhost:9292/top_books")
			.then((response) => response.json())
			.then((bookData) => {
				console.log(bookData);
				setBestBooks(bookData);
			});
	}, []);
	
	const mappedBooks = () => {
		return bestBooks.map((book) => {
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
								<img src={book.image_url} alt="book" />
							</div>
						</motion.div>
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
