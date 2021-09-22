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
            className="input-field"
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
          <p className="text-red-500">{errors?.name?.message}</p>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="input-field"
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
          <p className="text-red-500">{errors?.email?.message}</p>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="password">Password</label>
          <div className="relative focus-within:opacity-100">
            <input
              id="password"
              className="input-field"
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
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => <p className="text-red-500">{message}</p>}
            />
          </div>
          <p className="text-red-500">{errors?.password?.message}</p>
        </div>
        <div className="flex flex-col gap-2 mt-4 w-full">
          <label htmlFor="passwordConfirm">Repeat password</label>
          <div className="relative focus-within:opacity-100">
            <input
              id="passwordConfirm"
              className="input-field"
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
          {errors.passwordConfirm && (
            <p className="text-red-500">{errors.passwordConfirm.message}</p>
          )}
        </div>
        <div className="flex gap-2 mt-4 items-center">
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
