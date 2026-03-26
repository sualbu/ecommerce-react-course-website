import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.js';

function NavBar() {
	const { user, logOut } = useAuth();
	const isLoggedInUser = user !== null;

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<Link className="navbar-brand" to="/">
					ShopHub
				</Link>
				<div className="navbar-links">
					<Link className="navbar-link" to="/">
						Home
					</Link>
					<Link className="navbar-link" to="/checkout">
						Cart
					</Link>
				</div>
				<div className="navbar-auth">
					{isLoggedInUser ? (
						<div className="navbar-user">
							<span className="navbar-greeting">Hello, {user.email}</span>
							<button className="btn btn-secondary" onClick={logOut}>
								Log Out
							</button>
						</div>
					) : (
						<div className="navbar-auth-links">
							<Link className="btn btn-secondary" to="/auth-login">
								Log In
							</Link>
							<Link className="btn btn-primary" to="/auth-signup">
								Sign Up
							</Link>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
