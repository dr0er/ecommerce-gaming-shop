import { faCheck, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const [isRememberMe, setIsRememberMe] = useState(false)

  const handleChangePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev)
  }

  // NEED VALIDATION HERE
  const handleLogin = (e: any) => {
    e.preventDefault()
    setEmail('')
    setPassword('')
    setIsRememberMe(false)
  }

  return (
    <div className="flex flex-col gap-4 px-4">
      <form>
        <div className="flex flex-col gap-2">
          <p>Email</p>
          <input
            type="text"
            placeholder="Enter your email"
            className={`py-2 px-6 w-full duration-300 rounded-2xl outline-none border-2 ${
              !email && 'opacity-30'
            }  border-grey-light focus:opacity-100 bg-background-grey`}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <p>Password</p>
          <div
            className={`relative duration-300 ${
              !password && 'opacity-30'
            } focus-within:opacity-100 `}
          >
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Enter your password"
              className={`py-2 px-6 w-full  rounded-2xl  outline-none border-2  border-grey-light  bg-background-grey focus:opacity-100`}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />

            <FontAwesomeIcon
              icon={isPasswordVisible ? faEyeSlash : faEye}
              className="absolute flex top-1/2 right-7 transform -translate-y-2/4"
              onClick={handleChangePasswordVisibility}
            />
          </div>
        </div>
        <button className="hidden" type="submit" onClick={handleLogin}></button>
      </form>

      {/* REMEMBE ME AND RESET PASSWORD */}
      <div className="flex justify-between ">
        <div className="flex gap-3 align-middle" onClick={() => setIsRememberMe((prev) => !prev)}>
          <div className="border-2 w-5 h-5 rounded-md my-auto flex border-gray-400">
            {isRememberMe && <FontAwesomeIcon icon={faCheck} />}
          </div>
          <p className="opacity-30 font-bold text-sm my-auto">Remember me</p>
        </div>
        <p className="font-extrabold text-sm">Reset password</p>
      </div>

      {/* LOGIN BUTTON */}
      <div
        className="flex px-9 py-3 justify-center bg-grey-light text-white rounded-2xl text-sm mt-9 font-bold cursor-pointer"
        onClick={handleLogin}
      >
        Login
      </div>

      {/* SIGN UP */}

      <div className="text-grey-light font-bold text-sm flex gap-3 justify-center">
        <span className="opacity-30"> Don't have an account yet?</span>
        <Link to="/signup">
          <span className="text-blue-500 opacity-100 cursor-pointer underline">Sign up here!</span>
        </Link>
      </div>
    </div>
  )
}

export default LoginForm
