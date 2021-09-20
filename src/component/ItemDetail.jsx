import React from "react";
import  ItemCount from "./ItemCount";

function ItemDetail({ detailItem }){

  function agregar(cant, stockDisponible){
    
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
    <div>
      <h6>Nombre: {detailItem.productName}</h6>
      <img alt={detailItem.productName} src={detailItem.productImage} />
      <h6>Precio: ${detailItem.productPrice}</h6>
      <h6>Cantidad: {detailItem.productStock}</h6>
      <ItemCount stock={detailItem.productStock} inicial={0} miOnClick={agregar}/>
    </div>
  );
};

export default ItemDetail;
