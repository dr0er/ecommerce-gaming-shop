import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

interface LoginFormData {
  email?: string
  password?: string
  rememberMe?: boolean
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const handleChangePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev)
  }

  const handleLogin = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="Enter your email"
          className={`py-2 px-6 w-full duration-300 rounded-2xl outline-none border-2 border-gray-400 focus:border-gray-700 bg-background-grey`}
          {...register('email', { required: 'Email is required.' })}
        />
        <ErrorMessage name={'email'} errors={errors} as={<ErrorSpan />} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <div className={`relative duration-300`}>
          <input
            id="password"
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Enter your password"
            className={`py-2 px-6 w-full rounded-2xl outline-none border-2 border-gray-400 focus:border-gray-700 bg-background-grey focus:opacity-100`}
            {...register('password', { required: 'Password is required.' })}
          />

          <button type="button" onClick={handleChangePasswordVisibility}>
            <FontAwesomeIcon
              icon={isPasswordVisible ? faEyeSlash : faEye}
              className="absolute flex top-1/2 right-7 transform -translate-y-2/4"
            />
          </button>
        </div>
        <ErrorMessage errors={errors} name="password" as={<ErrorSpan />} />
      </div>

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

      <button className="flex px-9 py-3 justify-center bg-grey-light text-white rounded-2xl text-sm mt-6 font-bold cursor-pointer">
        Login
      </button>

      <div className="text-grey-light font-bold text-sm flex gap-3 justify-center">
        <span className="opacity-30"> Don&apos;t have an account yet?</span>
        <Link to="/signup">
          <span className="text-blue-500 opacity-100 cursor-pointer underline">Sign up here!</span>
        </Link>
      </div>
    </form>
  )
}

const ErrorSpan: FC = ({ children }) => <p className="text-red-500">{children}</p>

export default LoginForm
