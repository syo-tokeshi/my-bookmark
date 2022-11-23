import { ReactElement } from 'react'
import Header from './header'
import Footer from './footer'

type LayoutProps = Required<{
  readonly children: ReactElement
}>


const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
