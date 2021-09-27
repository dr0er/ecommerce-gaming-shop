import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Checkbox from "./Checkbox";

interface Credentials {
	email: string;
	password: string;
}

const LoginForm = () => {
	const { register, handleSubmit, watch } = useForm();

	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const [isRememberMe, setIsRememberMe] = useState(false);

	const handleChangePasswordVisibility = () => {
		setIsPasswordVisible((prev) => !prev);
	};

	// NEED VALIDATION HERE
	const handleLogin = (e: Credentials) => {
		const email = e.email;
		const password = e.password;
		const data = {
			email,
			password,
			remember: isRememberMe,
		};
		console.log(data);
	};

	return (
		<div className="flex flex-col gap-4 px-4">
			<form onSubmit={handleSubmit(handleLogin)}>
				<div className="flex flex-col gap-2">
					<p>Email</p>
					<input
						type="text"
						placeholder="Enter your email"
						className={`py-2 px-6 w-full duration-300 rounded-2xl outline-none border-2 ${
							!Boolean(watch("email")) && "opacity-30"
						}  border-grey-light focus:opacity-100 bg-background-grey`}
						{...register("email")}
					/>
				</div>

				<div className="flex flex-col gap-2 mt-2">
					<p>Password</p>
					<div
						className={`relative ${
							!Boolean(watch("password")) && "opacity-30"
						} duration-300 focus-within:opacity-100 `}
					>
						<input
							type={isPasswordVisible ? "text" : "password"}
							placeholder="Enter your password"
							className={`py-2 px-6 w-full duration-300 rounded-2xl outline-none border-2 border-grey-light bg-background-grey focus:opacity-100`}
							{...register("password")}
						/>

						<FontAwesomeIcon
							icon={isPasswordVisible ? faEyeSlash : faEye}
							className="absolute flex top-1/2 right-7 transform -translate-y-2/4"
							onClick={handleChangePasswordVisibility}
						/>
					</div>
				</div>
				<button
					className="hidden"
					type="submit"
					onClick={handleSubmit(handleLogin)}
				></button>
			</form>

			{/* REMEMBE ME AND RESET PASSWORD */}
			<div className="flex justify-between ">
				<Checkbox setCheckbox={setIsRememberMe} isCheckbox={isRememberMe} />
				<p className="font-extrabold text-sm">Reset password</p>
			</div>

			{/* LOGIN BUTTON */}
			<div
				className="flex px-9 py-3 justify-center bg-grey-light text-white rounded-2xl text-sm mt-9 font-bold cursor-pointer"
				onClick={handleSubmit(handleLogin)}
			>
				Login
			</div>

			{/* SIGN UP */}

			<div className="text-grey-light font-bold text-sm flex gap-3 justify-center">
				<span className="opacity-30"> Don't have an account yet?</span>
				<Link to="/signup">
					<span className="text-blue-500 opacity-100 cursor-pointer underline">
						Sign up here!
					</span>
				</Link>
			</div>
		</div>
	);
};

export default LoginForm;
