
import { useState, useEffect } from "react";
import HomePageStyle from "../styled-components/HomePageStyle";
import BooksStyle from "../styled-components/BooksStyle";
import BestBooksStyle from "../styled-components/BestBooksStyle";
import BestBooks from "./BestBooks";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import Books from "./Books";
import { Switch, Route } from "react-router-dom";

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	const [pasword, setPassword] = useState(null);
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


	const togglePassword = (password) => {
		setPassword(password);
	};


	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<NavBar />
					<HomePageStyle />
					<HomePage changeUser={changeUser} togglePassword = {togglePassword}/>
				</Route>
				<Route path="/books">
					<NavBar />
					<BooksStyle />
					<Books books={books} />
				</Route>
				<Route path="/best_books">
					<NavBar />
					<BestBooksStyle />
					<BestBooks books={books} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
