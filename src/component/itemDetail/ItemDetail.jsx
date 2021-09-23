import React from "react";
import  ItemCount from "../item/ItemCount";


function ItemDetail( {detailItem} ){

  const agregar = (cant, stockDisponible) =>{
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
      <br></br>
      <ItemCount stock= {detailItem.productStock} inicial={0} miOnClick={agregar}/>
      <h6>Descripcion: </h6>


    </div>
    </>
  );
};

export default ItemDetail;
