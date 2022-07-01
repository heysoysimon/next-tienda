import Layout from '../../components/Layout'
import { getItems } from '../../services/itemService'
/* import Image from 'next/image' */
import Productos from '../../components/Producto'

/* usa estilos de productos */
import style from '../../styles/Productos.module.css'

const Tienda = ({items}) => {
  return (
  <Layout>
     <div className={style.items}>
      {items &&
                items.map((item) => (
                  <Productos key={item.id} item={item} showAs="Default" />
                ))}
     </div>
     
  </Layout>
  )

}

export async function getStaticProps({items}){
   const respuesta = await  getItems() 

   return{
    props:{
        items: respuesta,
    }
   }
}

export default Tienda
