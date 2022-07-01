export async function getItems(){
    const respuesta = await fetch('http://localhost:3000/api/items')
    const items = await respuesta.json()

    return items
}

export async function getLatestItems(){
    const items = await getItems()

    return items.slice( 0, 3)
}