import Link from "next/link"
import Image from "next/image"
import AñadirAlCarro from "./AñadirAlCarro"
import style from "../styles/Productos.module.css"
import { converPath } from "../lib/utils"
import { useAppContext } from "./Estado"
const Producto = ({item, showAs, cantidad}) => {

    /* condiconal del producto  */
    if(showAs === 'page'){

        return(
            <div className={style.page}>

                <div className={style.imagen}>
                <Image 
                  src={item.image} 
                  alt={item.description} 
                  width="800" 
                  height="800"
                  />
                </div>

                <div className={style.info}>
                    <div>
                        <h2>{item.title}</h2>
                    </div>

                    <div className={style.precio}>${item.price}</div>
                    <div>{item.description}</div>
                    <div>
                        <AñadirAlCarro item={item}/>
                    </div>
                </div>
          </div>
        )
    }

    if (showAs === "ListaItem") {
        return (
          <div className={style.listaItem}>
            <div>
              <Image
                src={item.image}
                alt={item.description}
                width={150}
                height={150}
              />
            </div>
            <div>
              <div>{item.title}</div>
              <div>${item.price}</div>
              {cantidad === 0 ? "" : <div>{cantidad} units</div>}
    
              {cantidad === 0 ? "" : <div>Subtotal: ${cantidad * item.price}</div>}
            </div>
          </div>
        );
      }

    return(
        <div className={style.item}>
        <div>
            <Link href={`/tienda/${converPath(item.title)}`}>
                <a>
                  <Image 
                  src={item.image} 
                  alt={item.description} 
                  width="300" 
                  height="350"
                  />
                </a>
            </Link>
        </div>

        <div>
            <h3>

            <Link href={`/tienda/${converPath(item.title)}`}>
                <a>
                {item.title}
                </a>
            </Link>

            </h3>
        </div>

        <div>$
        {item.price}
        </div>

        <div>
        <AñadirAlCarro item={item}/>
        </div>
    </div>
    )

}

export default Producto
