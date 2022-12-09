import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div>
			<NavLink className="link" exact to="/">
				{" "}
				Homepage{" "}
			</NavLink>
			<NavLink className="link" to="/books">
				{" "}
				Books{" "}
			</NavLink>
			<NavLink className="link" to="/best_books">
				{" "}
				Best Books{" "}
			</NavLink>
			<NavLink className="link" to="/the_best_book">
				{" "}
				The Best Book{" "}
			</NavLink>
		</div>
	);
};

export default NavBar;
