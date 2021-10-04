import { faBars, faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import c from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Store/store'
import { useCallback } from 'react'
import { handleMenuClick } from '../../Store/menuSlice'

export const NavBar = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen)
  const dispatch = useDispatch()

  const onClick = useCallback(() => dispatch(handleMenuClick()), [dispatch])

  return (
    <>
      <div
        className={c(
          'w-auto h-20 text-black flex justify-between px-9 font text-2xl items-center duration-200 transition-opacity',
          isMenuOpen && 'opacity-0',
        )}>
        <div>
          <FontAwesomeIcon icon={faBars} onClick={onClick} />
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
