import AuthForm from '../components/AuthForm';

function AuthLogInPage() {
	return (
		<div className="page">
			<div className="container">
				<AuthForm mode="login" />
			</div>
		</div>
	);
}

export default AuthLogInPage;
