export async function getItems() {
  const url = `${process.env.BASE_URL}/api/items`;
  const respuesta = await fetch(url);
  const items = await respuesta.json();

  return items;
}

export async function getLatestItems() {
  const items = await getItems();

  return items.slice(0, 3);
}
