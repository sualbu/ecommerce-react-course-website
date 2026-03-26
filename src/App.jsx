import { Routes, Route } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
import CartProvider from './providers/CartProvider';
import HomePage from './pages/HomePage';
import AuthLogInPage from './pages/AuthLogInPage';
import AuthSignUpPage from './pages/AuthSignUpPage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import NavBar from './components/NavBar';
import './App.css';

function App() {
	return (
		<AuthProvider>
			<CartProvider>
				<div className="app">
					<NavBar />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/auth-login" element={<AuthLogInPage />} />
						<Route path="/auth-signup" element={<AuthSignUpPage />} />
						<Route path="/checkout" element={<CheckoutPage />} />
						<Route path="/product/:id" element={<ProductPage />} />
					</Routes>
				</div>
			</CartProvider>
		</AuthProvider>
	);
}

export default App;
