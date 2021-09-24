import RegisterForm from './RegisterForm'
import { Link } from 'react-router-dom'
import BackToMain from './BackToMain'
import { Routes } from '../../Utilities/routes'

const RegisterPage = () => {
  return (
    <div className="h-screen text-grey-light py-6 flex flex-col gap-6 items-center  max-w-md px-6 md: mx-auto">
      <BackToMain />
      <h1 className="font-bold text-3xl text-center ">Register to Stragan</h1>
      <RegisterForm />
      <p className="flex gap-2 opacity-70 mx-auto">
        Already have an account?
        <Link
          to={Routes.loginPage}
          className="text-blue-500 opacity-100 cursor-pointer underline font-bold">
          Login!
        </Link>
      </p>
    </div>
  )
}

export default RegisterPage
