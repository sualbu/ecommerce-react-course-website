import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
	const userCurr = localStorage.getItem('currentUserEmail');
	const [user, setUser] = useState(userCurr ? { email: userCurr } : null);

	const signUp = (email, password) => {
		const users = getUsers();
		const userCurr = getUser(email);

		if (userCurr) {
			return { success: false, error: 'Email already exists' };
		}

		const userNew = { email, password };

		users.push(userNew);
		localStorage.setItem('users', JSON.stringify(users));
		localStorage.setItem('currentUserEmail', email);
		setUser({ email });
		return { success: true };
	};

	const logIn = (email, password) => {
		const user = getUser(email, password);

		if (!user) {
			return { success: false, error: 'Invalid email or password' };
		}

		localStorage.setItem('currentUserEmail', email);
		setUser({ email });
		return { success: true };
	};

	const logOut = () => {
		localStorage.removeItem('currentUserEmail');
		setUser(null);
	};

	const getUsers = () => {
		return JSON.parse(localStorage.getItem('users') || '[]');
	};

	const getUser = (email, password = null) => {
		return getUsers().find((user) => {
			if (password) {
				return user.email === email && user.password === password;
			} else {
				return user.email === email;
			}
		});
	};

	return (
		<AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
