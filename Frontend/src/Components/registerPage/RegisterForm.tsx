import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { FormCheckbox, Input, PasswordInput, SubmitButton } from '../Forms'

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
        <FormCheckbox
          register={register('acceptTerms', {
            required: 'Please accept Terms and Conditions.',
          })}
          text="Accept Terms and Conditions"
        />
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
