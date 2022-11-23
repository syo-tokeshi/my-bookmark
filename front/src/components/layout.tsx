import { ReactElement } from 'react'

type LayoutProps = Required<{
  readonly children?: ReactElement
}>

import Header from './header'
import Footer from './footer'
const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
