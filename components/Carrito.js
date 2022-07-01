import { useAppContext } from "./Estado"
import Producto from "./Producto"
import style from "../styles/Carrito.module.css"

const Carrito = () => {

 const carrito = useAppContext()

    function hanleCloseCart(){
        carrito.CloseCart()
    }

   
    function getTotal() {
      const total = carrito.items.reduce((acc, item) => {
        return (acc += item.cantidad * item.price);
      }, 0);
      return total;
    }

  return (
    <div className={style.carrito} style={{display: carrito.isOpen ? "block" : "none"}}>
      <button className={style.cerrar} onClick={hanleCloseCart}> cerrar</button>

        {carrito.items.length === 0 ? (<div className={style.vacio}> Carrito Vacio</div>) 
        :( <>

<h3> articulos</h3>
      <div>
        {/* iterar carrito */}
        {carrito.items.map(item => <Producto

            /* props */
            key={item.id}
            item={item}
            showAs="ListaItem"
            cantidad={item.cantidad}/>)}
      </div>
        </>)}
        <div className={style.total}>Total: ${getTotal()}</div>
    </div>
  )
}

export default Carrito
