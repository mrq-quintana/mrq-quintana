import React from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";


const Cart = () => {
    
    const {cartList, borrar,precioTotal} = useCartContext()

    console.log(cartList) //Con este debo terminar el formulario de compra agregando datos del comprador

    if (cartList.length === 0) 
    
    return  <> 
            <h2>Su carrito esta vacio</h2>
            <Link to={`/`}>
            <button className="btn btn-primary">Vayamos a comprar</button>  
            </Link>
            </>

    return <> <div>
                    <center>{ cartList.map(carritoItem =>
                        <div key={carritoItem.item.productId}> 
                            <h2>{carritoItem.item.productName} jajaja</h2>
                            <img alt={carritoItem.item.productName} src={carritoItem.item.productImage} />
                            <h2>${carritoItem.item.productPrice}</h2>
                            <h3>{carritoItem.cantidad}</h3>
                            <h2>${carritoItem.cantidad * carritoItem.item.productPrice}</h2>
                            <button onClick={()=>borrar(carritoItem)} >Eliminar</button> 
                        </div>) }
                        <div>
                            {precioTotal()}
                        </div>
                        <div>
                        <Link to={'/finalizar'} >
                            <button>Finalizar</button> 
                        </Link>
                        </div>
                    </center> 
                </div>
        </>
        
    
    
}

export default Cart

