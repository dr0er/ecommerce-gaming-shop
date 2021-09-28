import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Input, PasswordInput, SubmitButton } from '../Forms'

interface LoginFormData {
  email: string
  password: string
  rememberMe: boolean
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>()
  const handleLogin = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <Input
        label="Email"
        register={register('email', { required: 'Email is required.' })}
        errors={errors}
        placeholder="Enter your email"
      />
      <PasswordInput
        label="Password"
        register={register('password', { required: 'Password is required.' })}
        errors={errors}
        placeholder="Enter your password"
      />

      <div className="flex justify-between">
        <div className="flex gap-3 align-middle">
          <input
            id="rememberMe"
            type="checkbox"
            className="h-5 w-5 cursor-pointer"
            style={{ accentColor: '#f3f5f7' }}
            {...register('rememberMe')}
          />
          <label
            htmlFor="rememberMe"
            className="opacity-30 font-bold text-sm my-auto cursor-pointer">
            Remember me
          </label>
        </div>
        <p className="font-extrabold text-sm">Reset password</p>
      </div>

      <SubmitButton>Login</SubmitButton>

      <div className="text-grey-light font-bold text-sm flex gap-3 justify-center">
        <span className="opacity-30"> Don&apos;t have an account yet?</span>
        <Link to="/signup">
          <span className="text-blue-500 opacity-100 cursor-pointer underline">Sign up here!</span>
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
