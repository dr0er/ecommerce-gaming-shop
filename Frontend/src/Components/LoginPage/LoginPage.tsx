<<<<<<< HEAD
<<<<<<< HEAD
import BackToMain from '../shared/BackToMain'
=======
>>>>>>> 241eea1... Extract forms components
=======
>>>>>>> f9a8d12789a18e4f4967212f43a54e844bd6a3b6
import LoginForm from './LoginForm'
import { BackToMain } from '../Forms'

const LoginPage = () => {
  return (
    <div className="h-screen text-grey-light py-6 flex flex-col gap-8 align-middle  max-w-md px-6 md: mx-auto">
      <BackToMain />
      <div className="font-bold text-3xl text-center ">Login to Stragan</div>
      <LoginForm />
    </div>
  )
}

export default LoginPage
