import { NavBar } from '../Navbar/Navbar'

interface HeaderProps {
  isMenuOpen: boolean
  handleMenuClick: () => void
}

export const Header = ({ isMenuOpen, handleMenuClick }: HeaderProps) => {
  return (
    <>
      <NavBar isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
      <div>
        <h1 className="font-bold mx-6 text-3xl">Stragan.com</h1>
      </div>
    </>
  )
}
