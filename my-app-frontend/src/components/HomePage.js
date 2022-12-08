import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const HomePage = ({ changeUser, togglePassword }) => {
	const [userLogin, setUserLogin] = useState("");
	const [passLogin, setPassLogin] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		findCurrentUser(userLogin, passLogin);
	};

	const handleChange = (e) => {
		setUserLogin(e.target.value);
	};

    const handlePassChange = (e) => {
		setPassLogin(e.target.value);
	};

	const history = useHistory();

	async function findCurrentUser(username, password) {
		const response = await fetch(`http://localhost:9292/logins/${username}/${password}`);

		if (response.status === 401) {
			return alert("Wrong Username or Password");
		} else {
			const user = await response.json()
			changeUser(username);
            togglePassword(password);

			history.push("/books");
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="login" value="Username">
					{" "}
					Username:{" "}
				</label>
				<br />
				<input
					type="text"
					name="login"
					value={userLogin}
					onChange={handleChange}
					autoFocus={true}
				/>
			
                <br />
                <br />
                <input
                type="text"
                name="password"
                value={passLogin}
                onChange={handlePassChange}
                autoFocus={true}
                >
                </input>
                <input type="submit" value="Login" />
			</form>
		</div>
	);
};

export default HomePage;
