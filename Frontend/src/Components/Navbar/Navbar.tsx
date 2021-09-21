import { faBars, faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import c from 'clsx'

interface NavBarProps {
  isMenuOpen: boolean
  handleMenuClick: () => void
}

export const NavBar = ({ isMenuOpen, handleMenuClick }: NavBarProps) => {
  return (
    <>
      <div
        className={c(
          'w-auto h-20 text-black flex justify-around font text-2xl items-center duration-200 transition-opacity',
          isMenuOpen && 'opacity-0',
        )}>
        <div>
          <FontAwesomeIcon icon={faBars} onClick={handleMenuClick} />
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
    </>
  )
}
