
import { useAppContext } from "./Estado"
import style from "../styles/AñadirAlCarro.module.css"
const AñadirAlCarro = ({item}) => {


  const carrito = useAppContext()


    function hanledClick(){
        carrito.addItemToCart(item)
        carrito.openCart()
    }
  return (
    <button className={style.boton}
    onClick={hanledClick}>
      Añadir al Carrito
    </button>
  )
}

export default AñadirAlCarro
