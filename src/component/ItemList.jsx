import Item from "./Item";

function ItemList({productos}) {
  
  return (
      <>
         {productos.map((producto)=>(<Item key={producto.productId} producto={producto}/>))}
         
      </>
  )
}

export default ItemList;
