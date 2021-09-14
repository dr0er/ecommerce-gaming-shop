import { FunctionComponent } from 'react'
import btnProps from './interfaces/BtnProps'

const SubmitBtn: FunctionComponent<btnProps> = ({ children }) => {
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

export default SubmitBtn
