import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import SubmitBtn from './SubmitBtn'
import { faCheck, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ErrorMessage } from '@hookform/error-message'
import IFormInputs from './interfaces/IFormInputs'

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
<<<<<<< HEAD
  } = useForm<IFormInputs>({
    criteriaMode: 'all',
  })
=======
  } = useForm<IFormInputs>()
>>>>>>> 296ec60c9ce54bf6438431ced0d4c49d275ea1a6

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
<<<<<<< HEAD
            className="input-field"
=======
            className="py-2 px-6 w-full duration-300 rounded-2xl outline-none border-2 
                        opacity-30 border-grey-light focus:opacity-100 bg-background-grey"
>>>>>>> 296ec60c9ce54bf6438431ced0d4c49d275ea1a6
            type="text"
            placeholder="Orangutan"
            {...register('name', {
              required: 'This field is required!',
              maxLength: 20,
            })}
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
<<<<<<< HEAD
          <p className="text-red-500">{errors?.name?.message}</p>
=======
>>>>>>> 296ec60c9ce54bf6438431ced0d4c49d275ea1a6
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="email">Email</label>
          <input
            id="email"
<<<<<<< HEAD
            className="input-field"
=======
            className="py-2 px-6 w-full duration-300 rounded-2xl outline-none border-2 
                        opacity-30 border-grey-light focus:opacity-100 bg-background-grey"
>>>>>>> 296ec60c9ce54bf6438431ced0d4c49d275ea1a6
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
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
<<<<<<< HEAD
          <p className="text-red-500">{errors?.email?.message}</p>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="password">Password</label>
          <div className="relative focus-within:opacity-100">
            <input
              id="password"
              className="input-field"
=======
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="password">Password</label>
          <div className={`relative opacity-30 focus-within:opacity-100`}>
            <input
              id="password"
              className="py-2 px-6 pr-12 w-full duration-300 rounded-2xl outline-none border-2 
                                border-grey-light focus:opacity-100 bg-background-grey"
>>>>>>> 296ec60c9ce54bf6438431ced0d4c49d275ea1a6
              type={passwordsVisibility.pass ? 'text' : 'password'}
              placeholder="password..."
              {...register('password', {
                required: 'This field is required!',
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
<<<<<<< HEAD
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => <p className="text-red-500">{message}</p>}
            />
=======
>>>>>>> 296ec60c9ce54bf6438431ced0d4c49d275ea1a6
          </div>
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
        </div>
        <div className="flex flex-col gap-2 mt-4 w-full">
          <label htmlFor="passwordConfirm">Repeat password</label>
<<<<<<< HEAD
          <div className="relative focus-within:opacity-100">
            <input
              id="passwordConfirm"
              className="input-field"
=======
          <div
            className={`relative w-full opacity-30
            focus-within:opacity-100 `}>
            <input
              id="passwordConfirm"
              className="py-2 px-6 pr-12 w-full  rounded-2xl outline-none border-2 
                                border-grey-light focus:opacity-100 bg-background-grey"
>>>>>>> 296ec60c9ce54bf6438431ced0d4c49d275ea1a6
              type={passwordsVisibility.passConfirm ? 'text' : 'password'}
              placeholder="password..."
              {...register('passwordConfirm', {
                required: 'This field is required!',
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
<<<<<<< HEAD
          {errors.passwordConfirm && (
            <p className="text-red-500">{errors.passwordConfirm.message}</p>
          )}
        </div>
        <div className="flex gap-2 mt-4 items-center">
=======
        </div>
        {errors.passwordConfirm && <p className="text-red-500">{errors.passwordConfirm.message}</p>}
        <div className="flex gap-2 mt-4 items-center ">
>>>>>>> 296ec60c9ce54bf6438431ced0d4c49d275ea1a6
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
        <ErrorMessage
          errors={errors}
          name="acceptTerms"
          render={({ message }) => <p className="text-red-500">{message}</p>}
        />

        <SubmitBtn>Register</SubmitBtn>
      </form>
    </div>
  )
}

export default RegisterForm
