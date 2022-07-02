import { getItems } from "../services/itemService";

export async function getIds() {
  const items = await getItems();

  const ids = items.map((item) => {
    return {
      params: {
        /* aqui van los ids de los objectos */
        id: converPath(item.title),
      },
    };
  });

  return ids;
}

export async function getItemData(id) {
  const items = await getItems();

  const producto = items.find((item) => converPath(item.title) === id);

  return {
    id: id,
    data: producto,
  };
}

export function converPath(title) {
  return title.toLowerCase().replace(/\s/g, "-");
}
