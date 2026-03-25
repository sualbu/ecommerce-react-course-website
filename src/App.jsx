import { Routes, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import NavBar from './components/NavBar';
import './App.css';

function App() {
	return (
		<AuthProvider>
			<div className="app">
				<NavBar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/auth" element={<AuthPage />} />
					<Route path="/product" element={<ProductPage />} />
					<Route path="/checkout" element={<CheckoutPage />} />
				</Routes>
			</div>
		</AuthProvider>
	);
}

export default App;
