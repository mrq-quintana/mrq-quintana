import React from "react";
import  ItemCount from "../item/ItemCount";
import { useCartContext } from "../../context/CartContext"


function ItemDetail( {detailItem} ){
  const {agregarCarrito} = useCartContext()
    
    const agregar = (cant, stockDisponible) =>{
          agregarCarrito({item: detailItem, cantidad: cant})
    

    if (stockDisponible >= 1) {
      console.log(
        "Compraste " +
          cant +
          " unidades quedan " +
          (stockDisponible - cant) +
          " disponibles!"
      );
      
    } else {
      console.log("Ya no queda mas Stock Disponible");
    } 
  }


  return (
    <>
    <div>
      <h6>Nombre: {detailItem.productName}</h6>
      <h6>Precio: ${detailItem.productPrice}</h6>
      <img alt={detailItem.productName} src={detailItem.productImage} />
      <h6>Descripcion: {detailItem.description}</h6>
      <br></br>
      <ItemCount stock= {detailItem.productStock} inicial={1} miOnClick={agregar}/>


    </div>
    </>
  );
};

export default ItemDetail;
