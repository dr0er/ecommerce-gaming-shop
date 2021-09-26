import { useState } from 'react'

const useToggler = (defaultValue = false) => {
  const [toggleOn, setToggleOn] = useState(defaultValue)

  const toggle = () => {
    setToggleOn((prev) => !prev)
  }
  return [toggleOn, toggle]
}

export default useToggler
