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
    <div className="cord">
      <h5>{detailItem.productName}</h5>
      <h5>${detailItem.productPrice}</h5>
      <img className="cord_image" alt={detailItem.productName} src={detailItem.productImage} />
      <h5>{detailItem.description}</h5>
      <br></br>
      <ItemCount stock= {detailItem.productStock} inicial={1} miOnClick={agregar}/>


    </div>
    </>
  );
};

export default ItemDetail;
