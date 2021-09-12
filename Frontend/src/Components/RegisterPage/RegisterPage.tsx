import RegisterForm from './RegisterForm'
import {Link} from 'react-router-dom'

const LoginPage = () => {
    return (
        <div className="h-screen text-grey-light py-6 flex flex-col gap-8 align-middle  max-w-md px-6 md: mx-auto">
            <h1 className="font-bold text-3xl text-center ">Register to Stragan</h1>
            <RegisterForm />
            
            <p className="flex gap-2 opacity-70 mx-auto">Already have an account?<Link to="/login">
                <span className="text-blue-500 opacity-100 cursor-pointer underline font-bold">
						Login!
				</span></Link></p>
            
        </div>
    )
}

export default LoginPage