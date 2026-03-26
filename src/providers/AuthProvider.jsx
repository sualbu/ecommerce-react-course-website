import { useState } from 'react';
import { AuthContext } from '../contexts/AuthContext.js';

function AuthProvider({ children }) {
	const userCurr = getUserCurr();
	const [user, setUser] = useState(userCurr ? { email: userCurr } : null);

	function signUp(email, password) {
		const userStored = getUserStored(email);

		if (userStored) {
			return { success: false, error: 'Email already exists' };
		}

		addUser({ email, password });
		setUserCurrent(email);
		setUser({ email });
		return { success: true };
	}

	function logIn(email, password) {
		const userStored = getUserStored(email, password);

		if (!userStored) {
			return { success: false, error: 'Invalid email or password' };
		}

		setUserCurrent(email);
		setUser({ email });
		return { success: true };
	}

	function logOut() {
		setUserCurrent(null);
		setUser(null);
	}

	function getUsers() {
		return JSON.parse(localStorage.getItem('users') || '[]');
	}

	function getUserStored(email, password = null) {
		const users = getUsers();

		if (password === null) {
			return users.find((u) => u.email === email);
		}

		if (password !== null) {
			return users.find((u) => u.email === email && u.password === password);
		}
	}

	function getUserCurr() {
		return localStorage.getItem('currentUserEmail') || null;
	}

	function addUser(userNew, isMakeCurrent = false) {
		const users = getUsers();

		users.push(userNew);
		localStorage.setItem('users', JSON.stringify(users));

		if (isMakeCurrent) {
			localStorage.setItem('currentUserEmail', userNew.email);
		}
	}

	function setUserCurrent(email) {
		if (email) {
			localStorage.setItem('currentUserEmail', email);
		} else {
			localStorage.removeItem('currentUserEmail');
		}
	}

	return (
		<AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
