import React, { FunctionComponent, ReactNode } from 'react'

interface btnProps {
  register: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: ReactNode
}

const SubmitBtn: FunctionComponent<btnProps> = ({ register, children }) => {
  return (
    <div>
      <button
        type="submit"
        className="flex px-9 py-3 w-full justify-center bg-grey-light text-white rounded-2xl text-sm mt-9 cursor-pointer"
        onSubmit={register}>
        {children}
      </button>
    </div>
  )
}

export default SubmitBtn
