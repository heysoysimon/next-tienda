import '../styles/globals.css'
import Estado from '../components/Estado'
function MyApp({ Component, pageProps }) {
  return <Estado>
      <Component {...pageProps} />
  </Estado>
  /* maneja el estado del carrito del compras  */
}

export default MyApp
