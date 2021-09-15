import React from 'react'

const ItemDetail=({detailItem})=> {
    return(
        <div>
            <h6>Nombre: {detailItem.productName}</h6>
            <h6>Cantidad: {detailItem.productStock}</h6>
            <h6>Precio: ${detailItem.productPrice}</h6>
            <img alt={detailItem.productName} src={detailItem.productImage}/>
        </div>
    )

}

export default ItemDetail
