import React, { memo } from 'react'
import Item from "../item/Item";

const ItemList = memo(
  ({ productos }) => {

    return (
      <>
        <div><h4 className="card-title">Remeras King of Lyons</h4>
          {productos.map((producto) => (<Item key={producto.productId} producto={producto} />))}

        </div>
      </>
    )
  })

export default ItemList;
