import { useState } from "react";

const NewUser = ({ setNewUser, newUser, clicknewAccTrue }) => {
	const [newU, setNewU] = useState("");
	const [newP, setNewP] = useState("");

	const handleChangeU = (e) => {
		setNewU(e.target.value);
	};

	const handleChangeP = (e) => {
		setNewP(e.target.value);
	};

	const userObj = {
		username: newU,
		password: newP,
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const configObj = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(userObj),
		};
		fetch("http://localhost:9292/users", configObj)
			.then((response) => response.json())
			.then((user) => {
				setNewUser([...newUser, user]);
			});
		clicknewAccTrue();
	};

	return (
		<div className="form">
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChangeU}
					placeholder="Enter New Username"
					value={newU}
				></input>
				<br />
				<br />
				<input
					onChange={handleChangeP}
					placeholder="Enter New Password"
					value={newP}
					type="password"
				></input>
				<br />
        <br />
				<button>Submit</button>
			</form>
		</div>
	);
};

export default NewUser;
