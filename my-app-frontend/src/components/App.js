
import { useState, useEffect } from "react";
import HomePageStyle from "../styled-components/HomePageStyle";
import BooksStyle from "../styled-components/BooksStyle";
import BestBooksStyle from "../styled-components/BestBooksStyle";
import TheBestBookStyle from "../styled-components/TheBestBookStyle";
import BestBooks from "./BestBooks";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import Books from "./Books";
import TheBestBook from "./TheBestBook";
import { Switch, Route } from "react-router-dom";

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	const [password, setPassword] = useState(null);
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetch("http://localhost:9292/")
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
					<Books books={books} currentUser={currentUser} />
				</Route>
				<Route path="/best_books">
					<NavBar />
					<BestBooksStyle />
					<BestBooks books={books} />
				</Route>
				<Route path="/the_best_book">
          <NavBar />
					<TheBestBookStyle />
					<TheBestBook />
					</Route>
			</Switch>
		</div>
	);
}

export default App;
