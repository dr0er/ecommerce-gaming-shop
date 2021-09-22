import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import SubmitBtn from './SubmitBtn'
import { faCheck, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RegisterForm = () => {
  interface IFormInputs {
    name: string
    email: string
    password: string
    passwordConfirm: string
    acceptTerms: boolean
  }
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<IFormInputs>()

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(JSON.stringify(data))

  type passwordsVisibility = { pass: boolean; passConfirm: boolean }
  const [passwordsVisibility, setPasswordsVisibility] = useState<passwordsVisibility>({
    pass: false,
    passConfirm: false,
  })

  const handleChangePasswordVisibility = (iconId: keyof passwordsVisibility): void => {
    setPasswordsVisibility((prev) => ({ ...passwordsVisibility, [iconId]: !prev[iconId] }))
  }

  return (
    <div className="flex flex-col gap-4 px-4 mt-4 w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className={`py-2 px-6 w-full duration-300 rounded-2xl outline-none border-2 
                        ${!watch('name') && 'opacity-30'}  
                        border-grey-light focus:opacity-100 bg-background-grey`}
            type="text"
            placeholder="Orangutan"
            {...register('name', {
              required: 'This field is required!',
              maxLength: 20,
            })}
          />
          <p className="text-red-500">{errors?.name?.message}</p>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className={`py-2 px-6 w-full duration-300 rounded-2xl outline-none border-2 
                        ${!watch('email') && 'opacity-30'}  
                        border-grey-light focus:opacity-100 bg-background-grey`}
            type="email"
            placeholder="mario@gmail.com"
            {...register('email', {
              required: 'This field is required!',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid',
              },
            })}
          />
          <p className="text-red-500">{errors?.email?.message}</p>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="password">Password</label>
          <div
            className={`relative ${!watch('password') && 'opacity-30'} focus-within:opacity-100`}>
            <input
              id="password"
              className="py-2 px-6 pr-12 w-full duration-300 rounded-2xl outline-none border-2 
                                border-grey-light focus:opacity-100 bg-background-grey"
              type={passwordsVisibility.pass ? 'text' : 'password'}
              placeholder="password..."
              {...register('password', {
                required: 'Password is required!',
                minLength: {
                  value: 6,
                  message: 'Password has to be at least 6 characters long!',
                },
              })}
            />

            <FontAwesomeIcon
              icon={passwordsVisibility.pass ? faEye : faEyeSlash}
              className="absolute top-9 right-5 transform -translate-y-5"
              onClick={() => handleChangePasswordVisibility('pass')}
            />
          </div>
          <p className="text-red-500">{errors?.password?.message}</p>
        </div>
        <div className="flex flex-col gap-2 mt-4 w-full">
          <label htmlFor="passwordConfirm">Repeat password</label>
          <div
            className={`relative w-full ${!watch('passwordConfirm') && 'opacity-30'} 
            focus-within:opacity-100 `}>
            <input
              id="passwordConfirm"
              className="py-2 px-6 pr-12 w-full  rounded-2xl outline-none border-2 
                                border-grey-light focus:opacity-100 bg-background-grey"
              type={passwordsVisibility.passConfirm ? 'text' : 'password'}
              placeholder="password..."
              {...register('passwordConfirm', {
                required: 'Password is required!',
                minLength: {
                  value: 6,
                  message: 'Password has to be at least 6 characters long!',
                },
                validate: {
                  matchesPreviousPassword: (value) => {
                    const { password } = getValues()
                    return password === value || 'Passwords should match!'
                  },
                },
              })}
            />

            <FontAwesomeIcon
              id="passConfirm"
              icon={passwordsVisibility.passConfirm ? faEye : faEyeSlash}
              className="absolute top-9 right-5 transform -translate-y-5"
              onClick={() => handleChangePasswordVisibility('passConfirm')}
            />
          </div>
          <p className="text-red-500">{errors?.passwordConfirm?.message}</p>
        </div>
        <div className="flex gap-2 mt-4 items-center ">
          <label htmlFor="acceptTerms" className="cursor-pointer relative">
            <input
              id="acceptTerms"
              className="appearance-none w-4 h-4 border-2 rounded-md border-grey-light opacity-30 active:opacity-100"
              type="checkbox"
              {...register('acceptTerms', {
                required: 'Please accept Terms and Conditions.',
              })}
            />
            <FontAwesomeIcon
              icon={faCheck}
              className="w-4 h-4 text-grey-light text-sm absolute left-0.5 top-0.5 text-opacity-0 check-1 transition"
            />
          </label>
          <span>Accept Terms and Conditions</span>
        </div>
        <p className="text-red-500">{errors?.acceptTerms?.message}</p>

        <SubmitBtn>Register</SubmitBtn>
      </form>
    </div>
  )
}

export default RegisterForm
