import Layout from "../../components/Layout";
import Producto from "../../components/Producto";
import { getIds, getItemData } from "../../lib/utils";

export default function ProductosPage({ productoInfo }) {
  return (
    <Layout>
      <Producto item={productoInfo.data} showAs="page" />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const id = params.id;
  const producto = await getItemData(id);

  return {
    props: {
      productoInfo: producto,
    },
  };
}
