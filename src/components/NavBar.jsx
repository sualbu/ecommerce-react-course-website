import { Link } from 'react-router-dom';

function NavBar() {
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
					<div className="navbar-auth-links">
						<Link className="btn btn-secondary" to="/auth">
							Log In
						</Link>
						<Link className="btn btn-primary" to="/auth">
							Signup
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
