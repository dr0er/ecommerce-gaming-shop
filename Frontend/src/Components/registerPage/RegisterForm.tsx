import { useState } from 'react'
import RegisterBtn from '../registerPage/RegisterBtn'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function RegisterForm() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    areTermsAccepted: false,
  })

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
  const [isPassword2Visible, setIsPassword2Visible] = useState<boolean>(false)

  function handleChange(e: any): void {
    const { name, value, type, checked } = e.target
    type === 'checkbox'
      ? setUserData({
          ...userData,
          [name]: checked,
        })
      : setUserData({
          ...userData,
          [name]: value,
        })
  }

  function handleRegister(e: any): void {
    e.preventDefault()
    //todo: POST userData to server
  }

  function handleChangePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState)
  }

  function handleChangePassword2Visibility() {
    setIsPassword2Visible((prevState) => !prevState)
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
              type={isPasswordVisible ? 'text' : 'password'}
              value={userData.password}
              name="password"
              placeholder="password..."
              onChange={handleChange}
              required
            />
            <FontAwesomeIcon
              icon={isPasswordVisible ? faEye : faEyeSlash}
              className="absolute flex top-1/2 right-7 transform -translate-y-2/4"
              onClick={handleChangePasswordVisibility}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="password2">Repeat password</label>
          <div
            className={`relative ${!userData.password2 && 'opacity-30'} focus-within:opacity-100 `}>
            <input
              className={`py-2 px-6 w-full  rounded-2xl outline-none border-2 
                                border-grey-light focus:opacity-100 bg-background-grey`}
              type={isPassword2Visible ? 'text' : 'password'}
              value={userData.password2}
              name="password2"
              placeholder="password..."
              onChange={handleChange}
              required
            />
            <FontAwesomeIcon
              icon={isPassword2Visible ? faEye : faEyeSlash}
              className="absolute flex top-1/2 right-7 transform -translate-y-2/4"
              onClick={handleChangePassword2Visibility}
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

        <RegisterBtn btnText="Register" register={handleRegister} />
      </form>
    </div>
  )
}
