import { Helmet } from 'react-helmet'
import { Header } from './Header'
import { Footer } from './Footer'
import { useCallback, useState } from 'react'
import c from 'clsx'
import Menu from '../Navbar/Menu'
import { useSelector } from 'react-redux'
import { RootState } from '../../Store/store'

export interface LayoutProps {
  title?: string
}

export default function Layout({
  children,
  title = 'Gaming shop',
}: React.PropsWithChildren<LayoutProps>) {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen)

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Menu />
      <div
        className={c(
          'transform duration-200',
          isMenuOpen && 'translate-x-64 opacity-30 pointer-events-none',
        )}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}
