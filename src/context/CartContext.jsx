import { useState, createContext, useContext } from "react";

const cartContext = createContext([]);
export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}){
    const [cartList, setCartList]= useState([])


    console.log(cartList)


    function agregarCarrito(item){
        let carritoCargado = [...cartList]
        
        if(carritoCargado.some(e => e.item.productId === item.item.productId)){
            carritoCargado.find(e=>e.item.productId ===item.item.productId).cantidad += item.cantidad
            setCartList([...cartList])
            
        }else{
            setCartList([...cartList, item])
        }
        
    }

    return(
        <cartContext.Provider value={{
        cartList,
        agregarCarrito,
        }}>

        {children}
        </cartContext.Provider>
    )
}