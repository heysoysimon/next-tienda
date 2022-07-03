export async function getItems() {
  const url = ("http://localhost:3000/api/items");
  const respuesta = await fetch(url);
  return respuesta.json();
}
