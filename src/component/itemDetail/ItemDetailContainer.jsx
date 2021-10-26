import React from "react";
import { useState, useEffect } from "react";
import getDb from "../../service/getFirebase";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [detailItem, setDetailItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idDetalle } = useParams();

  useEffect(() => {
    const db = getDb();

    db.collection("items")
      .doc(idDetalle)
      .get()
      .then((resp) => {
        setDetailItem(
          { productId: resp.id, ...resp.data() }
        );
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [idDetalle]);

  return (
    <div>
      {loading ? <p></p> : <ItemDetail detailItem={detailItem} />}
    </div>
  );
};

export default ItemDetailContainer;
