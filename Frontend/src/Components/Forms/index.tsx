import { ErrorMessage } from '@hookform/error-message'
import { ComponentProps, FC, useCallback, useState } from 'react'
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const ErrorSpan: FC = ({ children }) => <p className="text-red-500">{children}</p>

export const BackToMain = () => {
  return (
    <Link to="/">
      <div className="flex gap-5 items-center text-base font-bold cursor-pointer w-max">
        <FontAwesomeIcon icon={faChevronLeft} />
        Back to main page
      </div>
    </Link>
  )
}

export const SubmitButton: FC = ({ children }) => {
  return (
    <div>
      <button
        type="submit"
        className="flex px-9 py-3 w-full justify-center bg-grey-light text-white rounded-2xl text-sm mt-9 cursor-pointer">
        {children}
      </button>
    </div>
  )
}

interface InputProps extends ComponentProps<'input'> {
  label: string
  register: UseFormRegisterReturn
  errors: FieldErrors
}

export const Input = ({ register, label, errors, children, ...inputProps }: InputProps) => {
  const { name } = register
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <div className="relative">
        <input
          id={name}
          className="py-2 px-6 w-full duration-300 rounded-2xl outline-none border-2 border-gray-400 focus:border-gray-700 bg-background-grey"
          {...register}
          {...inputProps}
        />
        {children}
      </div>
      <ErrorMessage name={name} errors={errors} as={<ErrorSpan />} />
    </div>
  )
}

export const PasswordInput = (props: Omit<InputProps, 'type'>) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false)
  const handleChangePasswordVisibility = useCallback(() => {
    setPasswordVisible((prevState) => !prevState)
  }, [])

  return (
    <Input {...props} type={isPasswordVisible ? 'text' : 'password'}>
      <button
        type="button"
        className="absolute flex top-1/2 right-7 transform -translate-y-2/4"
        onClick={handleChangePasswordVisibility}>
        <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
      </button>
    </Input>
  )
}
