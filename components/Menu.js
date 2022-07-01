import Link from "next/link"
import style from '../styles/Menu.module.css'
import { useAppContext } from "./Estado"

const Menu = () => {

    const carrito = useAppContext()

    function ClikCart(){
        carrito.openCart()
    }

  return (
   <nav className={style.menu}>
    <div>
        <Link href='/'>
            <a className={style.link}> inicio</a>
        </Link>
        <Link href='/tienda'>
            <a className={style.link}> tienda</a>
        </Link>
        <Link href='/preguntas'>
            <a className={style.link}> preguntas frecuentes</a>
        </Link>
      {/*   <Link href='/'>
            <a> inicio</a>
        </Link> */}
    </div>
    <div>
        <a className={style.link} href="#" 
        onClick={ClikCart}> 
        {""}
        carrito({carrito.getNumbers()})</a>
    </div>
   </nav>
  )
}

export default Menu
