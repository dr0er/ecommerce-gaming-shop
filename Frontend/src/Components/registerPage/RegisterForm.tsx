import { useForm } from 'react-hook-form'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ErrorMessage } from '@hookform/error-message'
import { Input, PasswordInput, SubmitButton } from '../Forms'

interface RegisterFormData {
  name: string
  email: string
  password: string
  passwordConfirm: string
  acceptTerms: boolean
}

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<RegisterFormData>()

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <Input
        label="Name"
        placeholder="Orangutan"
        register={register('name', {
          required: 'This field is required!',
          maxLength: 20,
        })}
        errors={errors}
      />
      <Input
        label="Email"
        type="email"
        placeholder="mario@gmail.com"
        register={register('email', {
          required: 'This field is required!',
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: 'Email is not valid',
          },
        })}
        errors={errors}
      />
      <PasswordInput
        label="Password"
        placeholder="password..."
        register={register('password', {
          required: 'This field is required!',
          minLength: {
            value: 6,
            message: 'Password has to be at least 6 characters long!',
          },
        })}
        errors={errors}
      />
      <PasswordInput
        label="Repeat password"
        placeholder="password..."
        register={register('passwordConfirm', {
          required: 'This field is required!',
          validate: {
            matchesPreviousPassword: (value) => {
              const { password } = getValues()
              return password === value || 'Passwords should match!'
            },
          },
        })}
        errors={errors}
      />
      <div className="flex gap-2 items-center">
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
      <SubmitButton>Register</SubmitButton>
    </form>
  )
}

export default RegisterForm
