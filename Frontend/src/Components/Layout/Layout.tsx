import { Helmet } from 'react-helmet'
import { Header } from './Header'
import { Footer } from './Footer'

export interface LayoutProps {
  title?: string
}

export default function Layout({
  children,
  title = 'Gaming shop',
}: React.PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  )
}
