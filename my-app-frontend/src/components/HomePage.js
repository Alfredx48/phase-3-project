import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NewUser from "./NewUser"

const HomePage = ({ changeUser, togglePassword }) => {
	const [userLogin, setUserLogin] = useState("");
	const [passLogin, setPassLogin] = useState("");


    const [newUser,setNewUser] = useState("");

	const [newAcc,setNewAcc] = useState(false);

	const clicknewAccTrue = () => 
	{
		setNewAcc(!newAcc);
	}

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
		const response = await fetch(
			`http://localhost:9292/users/${username}/${password}`
		);

		if (response.status === 401) {
			return alert("Wrong Username or Password");
		} else {
			const user = await response.json();
			changeUser(user.username);
			togglePassword(user.password);

			history.push("/books");
			console.log(user);
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				{/* <label htmlFor="login" value="Username">
					{" "}
					Username:{" "}
				</label> */}
				<input
				placeholder="Username"
					type="text"
					name="login"
					value={userLogin}
					onChange={handleChange}
					autoFocus={true}
				/>
				<br />
				<br />
				{/* <label>Password:{" "}</label> */}
				<input
					type="password"
					placeholder="Password"
					name="password"
					value={passLogin}
					onChange={handlePassChange}
					autoFocus={true}
				></input>
				<br/>
				<br />
				<button type="submit" value="Login">Login</button>
			</form>
			<div>
							{newAcc ? (
								<NewUser
								setNewUser={setNewUser}
									newUser={newUser}
									clicknewAccTrue={clicknewAccTrue}
								/>
							) : null}
							<br />
							<button onClick={clicknewAccTrue}>Create New User</button>
						</div>
		</div>
	);
};

export default HomePage;
