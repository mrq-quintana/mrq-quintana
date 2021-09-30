import React, {memo} from 'react'
import Item from "../item/Item";


const ItemList = memo(
  ({productos}) => {
    
    return (
        <>
           {productos.map((producto)=>(<Item key={producto.productId} producto={producto}/>))}
           
        </>
    )
  })

export default ItemList;
