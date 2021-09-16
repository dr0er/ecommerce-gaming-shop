import { useState, MouseEvent } from 'react'
import SubmitBtn from './SubmitBtn'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RegisterForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    areTermsAccepted: false,
  })

  type passwordsVisibility = { pass: boolean; passConfirm: boolean }
  const [passwordsVisibility, setPasswordsVisibility] = useState<passwordsVisibility>({
    pass: false,
    passConfirm: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target
    setUserData({
      ...userData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleRegister = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    //todo: POST userData to server
  }

  const handleChangePasswordVisibility = (iconId: keyof passwordsVisibility): void => {
    setPasswordsVisibility((prev) => ({ ...passwordsVisibility, [iconId]: !prev[iconId] }))
  }

  return (
    <div className="flex flex-col gap-4 px-4 mt-4">
      <form>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            className={`py-2 px-6 w-full duration-300 rounded-2xl outline-none border-2 
                        ${
                          !userData.name && 'opacity-30'
                        }  border-grey-light focus:opacity-100 bg-background-grey`}
            type="text"
            value={userData.name}
            name="name"
            placeholder="Orangutan"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="email">Email</label>
          <input
            className={`py-2 px-6 w-full duration-300 rounded-2xl outline-none border-2 
                        ${
                          !userData.email && 'opacity-30'
                        }  border-grey-light focus:opacity-100 bg-background-grey`}
            type="email"
            value={userData.email}
            name="email"
            placeholder="mario@gmail.com"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="password">Password</label>
          <div
            className={`relative ${!userData.password && 'opacity-30'} focus-within:opacity-100 `}>
            <input
              className={`py-2 px-6 w-full duration-300 rounded-2xl outline-none border-2 
                                border-grey-light focus:opacity-100 bg-background-grey`}
              type={passwordsVisibility.pass ? 'text' : 'password'}
              value={userData.password}
              name="password"
              placeholder="password..."
              onChange={handleChange}
              required
            />
            <FontAwesomeIcon
              icon={passwordsVisibility.pass ? faEye : faEyeSlash}
              className="absolute flex top-1/2 right-7 transform -translate-y-2/4"
              onClick={() => handleChangePasswordVisibility('pass')}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="passwordConfirm">Repeat password</label>
          <div
            className={`relative ${
              !userData.passwordConfirm && 'opacity-30'
            } focus-within:opacity-100 `}>
            <input
              className={`py-2 px-6 w-full  rounded-2xl outline-none border-2 
                                border-grey-light focus:opacity-100 bg-background-grey`}
              type={passwordsVisibility.passConfirm ? 'text' : 'password'}
              value={userData.passwordConfirm}
              name="passwordConfirm"
              placeholder="password..."
              onChange={handleChange}
              required
            />
            <FontAwesomeIcon
              id="passConfirm"
              icon={passwordsVisibility.passConfirm ? faEye : faEyeSlash}
              className="absolute flex top-1/2 right-7 transform -translate-y-2/4"
              onClick={() => handleChangePasswordVisibility('passConfirm')}
            />
          </div>
        </div>

        <label htmlFor="areTermsAccepted">
          <div className="flex gap-2 mt-4 items-center ">
            <input
              className="checkbox checkbox-sm"
              name="areTermsAccepted"
              type="checkbox"
              checked={userData.areTermsAccepted}
              onChange={handleChange}
              required
            />
            <span>Accept Terms and Conditions</span>
          </div>
        </label>

        <SubmitBtn register={handleRegister}>Register</SubmitBtn>
      </form>
    </div>
  )
}

export default RegisterForm
