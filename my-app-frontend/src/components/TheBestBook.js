import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const TheBestBook = () => {
	const { width, height } = useWindowSize();
	const [party, setParty] = useState(true);
	const [theBestBook, setBestBook] = useState([]);

	useEffect(() => {
		fetch("http://localhost:9292/best")
			.then((res) => res.json())
			.then((bookData) => {
				setBestBook(bookData);
			});
	}, []);

	// const mappedReviews = () => {
	//   theBestBook.reviews.map(br => {
	//     return (
	//       <>
	//       <p>{br.comment}</p>
	//       <p>{br.book_rating}</p>
	//       </>
	//     )
	//   })
	// }

	const colorsConfetti = [
		"#f44336",
		"#e91e63",
		"#9c27b0",
		"#673ab7",
		"#3f51b5",
		"#2196f3",
		"#03a9f4",
		"#00bcd4",
		"#009688",
		"#4CAF50",
		"#8BC34A",
		"#CDDC39",
		"#FFEB3B",
		"#FFC107",
		"#FF9800",
		"#FF5722",
		"#795548",
	];

	const confetti = (
		<Confetti
			className="confetti"
			width={width}
			height={height}
			recycle={false}
			style={{ pointerEvents: "none" }}
			numberOfPieces={party ? 400 : 0}
			colors={colorsConfetti}
			onConfettiComplete={(confetti) => {
				setParty(false);
				confetti.reset();
			}}
		/>
	);
	console.log(theBestBook.reviews);

	return (
		<>
			<button onClick={() => setParty(!party)}>More Confetti</button>
		<div className="reviews">
			<h2 className="font-effect-3d-float">{theBestBook.author}</h2>
			<h1 className="font-effect-3d-float">Title: {theBestBook.title}</h1>
			<h2 className="font-effect-3d-float">Author: {theBestBook.author}</h2>
			<h2 className="font-effect-3d-float">Genre: {theBestBook.genre}</h2>
			<h2 className="font-effect-3d-float">Publisher: {theBestBook.publisher}</h2>
			<img src={theBestBook.image_url} alt="Book" />
			{/* {theBestBook.reviews.map((br) => {
				return (
					<>
						<p>{br.comment}</p>
						<p>{br.book_rating}</p>
					</>
				);
			})} */}
			{/* {mappedReviews()} */}
			{confetti}
		</div>
			</>
	);
};

export default TheBestBook;
