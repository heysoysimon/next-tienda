export async function getItems() {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/items`;
  const respuesta = await fetch(url);
  return respuesta.json();
}
