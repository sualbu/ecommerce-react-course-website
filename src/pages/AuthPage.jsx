import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function AuthPage() {
	const [mode, setMode] = useState('signup');
	const [error, setError] = useState(null);
	const { signUp, logIn } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();

	function handleMySubmit(data) {
		let result;

		setError(null);

		if (mode === 'signup') {
			result = signUp(data.email, data.password);
		} else {
			result = logIn(data.email, data.password);
		}

		if (result.success) {
			navigate('/');
		} else {
			setError(result.error);
		}
	}

	return (
		<div className="page">
			<div className="container">
				<div className="auth-container">
					<h1 className="page-title">
						{mode === 'signup' ? 'Sign Up' : 'Log In'}
					</h1>
					<form className="auth-form" onSubmit={handleSubmit(handleMySubmit)}>
						{error && <div className="error-message">{error}</div>}
						<div className="form-group">
							<label className="form-label" htmlFor="email">
								Email
							</label>
							<input
								className="form-input"
								type="email"
								id="email"
								{...register('email', { required: 'Email is required' })}
							/>
							{errors.email && (
								<span className="form-error">{errors.email.message}</span>
							)}
						</div>
						<div className="form-group">
							<label className="form-label" htmlFor="password">
								Password
							</label>
							<input
								className="form-input"
								type="password"
								id="password"
								{...register('password', {
									required: 'Password is required',
									minLength: {
										value: 6,
										message: 'Password must be at least 6 characters',
									},
									maxLength: {
										value: 12,
										message: 'Password must be no more than 12 characters',
									},
								})}
							/>
							{errors.password && (
								<span className="form-error">{errors.password.message}</span>
							)}
						</div>
						<button className="btn btn-primary btn-large" type="submit">
							{mode === 'signup' ? 'Sign Up' : 'Log In'}
						</button>
					</form>
					<div className="auth-switch">
						{mode === 'signup' ? (
							<p>
								Already have an account?{' '}
								<span
									className="auth-link"
									style={{ cursor: 'pointer' }}
									onClick={() => setMode('login')}
								>
									Login
								</span>
							</p>
						) : (
							<p>
								{' '}
								Don't have an account?{' '}
								<span
									className="auth-link"
									style={{ cursor: 'pointer' }}
									onClick={() => setMode('signup')}
								>
									Sign Up
								</span>{' '}
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default AuthPage;
