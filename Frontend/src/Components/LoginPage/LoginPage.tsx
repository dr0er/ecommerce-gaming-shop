<<<<<<< HEAD
import BackToMain from '../shared/BackToMain'
=======
>>>>>>> 241eea1... Extract forms components
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
