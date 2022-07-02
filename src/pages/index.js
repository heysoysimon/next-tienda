import Link from "next/link";
import Layout from "../components/Layout";
import Producto from "../components/Producto";
import { getItems } from "../services/itemService";
import style from "../styles/Home.module.css";
import styleProduct from "../styles/Productos.module.css";

export default function Home({ items }) {
  return (
    <Layout title="Bienvenido">
      <div className={style.banner}>
        <div className={style.bannerBackground}>
          <div className={style.bannerInfo}>
            <h2>Todo lo que Deseas Esta Aqui</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              placerat mauris at mauris consequat, ut varius sem congue. Nullam
              blandit quam nec orci maximus.
            </p>
            <Link href="/tienda">
              <a className={style.link}> nuestra colecion</a>
            </Link>
          </div>
        </div>
      </div>

      <h3>Latest Products</h3>
      <div className={styleProduct.items}>
        {items &&
          items.map((item) => (
            <Producto key={item.id} item={item} showAs={item} />
          ))}
      </div>

      <div className={style.galeria}>
        <div className={style.item1}></div>
        <div className={style.item2}></div>
        <div className={style.item3}></div>
      </div>

      <div className={style.articulo}>
        <div className={style.bannerBackground}>
          <div className={style.bannerInfo}>
            <h2>Encuentra lo Que Deseas!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              placerat mauris at mauris consequat, ut varius sem congue. Nullam
              blandit quam nec orci maximus.
            </p>
            <Link href="/tienda">
              <a className={style.link}> nuestra colecion</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getItems();
  console.log(typeof res);
  return {
    props: {
      items: res.slice(0, 3),
    },
  };
}
