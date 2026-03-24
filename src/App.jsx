import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import CheckoutPage from './pages/CheckoutPage';
import NavBar from './components/NavBar';
import './App.css';

function App() {
	return (
		<div className="app">
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/auth" element={<AuthPage />} />
				<Route path="/checkout" element={<CheckoutPage />} />
			</Routes>
		</div>
	);
}

export default App;
