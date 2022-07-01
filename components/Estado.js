import { createContext, useContext, useState } from "react"

const AppContext = createContext({
    isOpen: true,
    items:[],
    openCart: () =>{},
    CloseCart :() =>{},
    addItemToCart: () =>{},
    getNumbers: () =>{}
})

const Estado = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [items, setItems] = useState([])

    function hanledOpenCart(){
        setIsOpen(true)
    }

    function hanleCloseCart(){
        setIsOpen(false)
    }

    function hanledAddCart(item){
        const temp = [... items]
        /* busca el prducto y si es igual a item.id regresa el primero que encuentre  */
        const buscar = temp.find(producto => producto.id === item.id)

        /* si encuentra producto actualiza la cantidad  */
        if(buscar){
            buscar.cantidad++
        }else{
            /* si no actualiza item y luego lo inserta */
            item.cantidad = 1
            temp.push(item)
        }

        /* actualiza el estado despue de las dos operaciones anteriores  */
        setItems([... temp])
    }


        function getNumbers(){
            /* regresa la suma del lo acomulado en la  cantidad  */
            const total = items.reduce((acc, item) => {
                return (acc += item.cantidad);
              }, 0);
              return total;
        }

  return (
    <AppContext.Provider value={{
        isOpen,
        items,
        openCart: hanledOpenCart,
        CloseCart: hanleCloseCart,
        addItemToCart: hanledAddCart,
        getNumbers: getNumbers
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default Estado

export function useAppContext(){
    return useContext(AppContext)
}
