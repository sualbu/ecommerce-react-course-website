import AuthForm from '../components/AuthForm';

function AuthSignUpPage() {
	return (
		<div className="page">
			<div className="container">
				<AuthForm mode="signup" />
			</div>
		</div>
	);
}

export default AuthSignUpPage;
