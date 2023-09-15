import { AppProps } from 'next/app'
import '../styles/global.css'
import initAuth from '../initAuth' // the module you created above
// import LayoutNavbar from '../layout/LayoutNavbar'
import { GlobalcontextProdiver } from '../context/GlobalContext'
import LayoutDashboard from '../layout/LayoutDashboard'

initAuth()
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <GlobalcontextProdiver>
      <LayoutDashboard>
        <Component {...pageProps} />
      </LayoutDashboard>
    </GlobalcontextProdiver>
  )
}

export default MyApp