import { Helmet } from 'react-helmet'
import { Header } from './Header'
import { Footer } from './Footer'
import { useCallback, useState } from 'react'
import c from 'clsx'
import Menu from '../Navbar/Menu'

export interface LayoutProps {
  title?: string
}

export default function Layout({
  children,
  title = 'Gaming shop',
}: React.PropsWithChildren<LayoutProps>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = useCallback(() => {
    setIsMenuOpen((prevValue) => !prevValue)
  }, [])

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Menu isOpened={isMenuOpen} onClose={handleMenuClick} />
      <div
        className={c(
          'transform duration-200',
          isMenuOpen && 'translate-x-64 opacity-30 pointer-events-none',
        )}>
        <Header isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
        {children}
        <Footer />
      </div>
    </>
  )
}
