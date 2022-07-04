export async function getItems() {
  const url = `NEXT_PUBLIC_ANALYTICS_ID`;
  const respuesta = await fetch(process.env[url])
  return respuesta.json();
}

/* let url = `http//:${process.env["BASE_URL"]}/api/items`; */
export async function getLatestItems() {
  const items = await getItems();

  return items.slice(0, 3);
}
