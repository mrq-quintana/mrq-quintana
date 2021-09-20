import React from "react";
import { useState, useEffect } from "react";
import { db } from "../utils/mock";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [detailItem, setDetailItem] = useState([]);
  const { idDetalle } = useParams();

  useEffect(() => {
    db.then((respuesta) => {
      setDetailItem(
        respuesta.find((elemento) => {
          return elemento.productId === parseInt(idDetalle);
        })
      );
    }).catch((error) => {
      console.log(error);
    });
  });
  return (
    <div>
      <ItemDetail detailItem={detailItem} />
    </div>
  );
};

export default ItemDetailContainer;
