import { faBars, faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Menu from './Menu'
import { useCallback, useState } from 'react'

export const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false)

  const handleOpenMenu = useCallback(() => {
    setIsMenu(true)
  }, [])
  const handleCloseMenu = useCallback(() => {
    setIsMenu(false)
  }, [])

  return (
    <>
      <div
        className="w-auto h-20
  text-black flex justify-around font text-2xl items-center">
        <div>
          <FontAwesomeIcon icon={faBars} onClick={handleOpenMenu} />
        </div>
        <div>
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <Menu isOpened={isMenu} onClose={handleCloseMenu} />
    </>
  )
}
