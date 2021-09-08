import BackToMain from "./BackToMain";
import LoginForm from "./LoginForm";

const LoginPage = () => {
	return (
		<div className="h-screen text-grey-light py-6 flex flex-col gap-8 align-middle  max-w-md px-6 md: mx-auto">
			<BackToMain />

			<div className="font-bold text-3xl text-center ">Login to Stragan</div>

			<LoginForm />
		</div>
	);
};

export default LoginPage;
