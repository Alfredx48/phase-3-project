import "../App.css";

import { useState, useEffect } from "react";
import PendingReview from "./PendingReview";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import Books from "./Books";
import { Switch, Route } from "react-router-dom";

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetch("http://localhost:9292/books")
			.then((response) => response.json())
			.then((bookData) => {
				console.log(bookData);
				setBooks(bookData);
			});
	}, []);

	const changeUser = (user) => {
		setCurrentUser(user);
	};

	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
				<NavBar />
					<HomePage changeUser={changeUser} />
				</Route>
				<Route path="/books">
				<NavBar />
				<Books books={books}/>
				</Route>
				<Route path = "best_books"></Route>
				<PendingReview books = {books}/>
			</Switch>
		</div>
	);
}

export default App;
