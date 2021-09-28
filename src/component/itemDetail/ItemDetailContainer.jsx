import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../utils/mock";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [detailItem, setDetailItem] = useState({});
  const [loading,setLoading] = useState(true);
  const { idDetalle } = useParams();

  useEffect(() => {
    if (idDetalle){
      db.then((respuesta) => {
        setDetailItem(
          respuesta.find((e) => e.productId === parseInt(idDetalle))
        );
      }).catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
    }
  },[idDetalle]);
  
  return (
    <div>
      {loading ?<p></p>:<ItemDetail detailItem={detailItem} />}
    </div>
  );
};

export default ItemDetailContainer;
