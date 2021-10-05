import { useState, createContext, useContext } from "react";

const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}){

    const [cartList, setCartList]= useState([])


    function agregarCarrito(item){

        let carritoCargado = [...cartList]
      

        if(carritoCargado.some(e => e.item.productId === item.item.productId)){
            carritoCargado.find(e=>e.item.productId ===item.item.productId).cantidad += item.cantidad
            setCartList([...cartList])
            
            
        }else{
            setCartList([...cartList, item])
        }
        
    }

            const borrar = (item) => {
                //Verificamos si esta en el carrito  

                const borrarProducto = cartList.filter((e) => e.item.productId !== item.item.productId);
            
                setCartList([...borrarProducto]);
            };  


            const sumaCarrito = () => {
                return cartList.reduce( (a, suma)=> a + suma.cantidad, 0) 
            }


            const precioTotal =()=>{
                return cartList.reduce((ac, val)=>(ac + (val.cantidad * val.item.productPrice)), 0) 
            }

        function borrarLista() {
            cartList([])
        }


    return(
        <cartContext.Provider value={{
        cartList,
        agregarCarrito,
        borrar,
        sumaCarrito,
        precioTotal,
        borrarLista
        }}>

        {children}
        </cartContext.Provider>
    )
}