import React from 'react'
import Item from "../item/Item";

function ItemList({productos}) {
  
  return (
      <>
         {productos.map((producto)=>(<Item key={producto.productId} producto={producto}/>))}
         
      </>
  )
}

export default ItemList;
