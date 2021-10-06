import React from "react";
import { useState, useEffect } from "react";
// import { db } from "../../utils/mock";
import getDb from "../../service/getFirebase";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [detailItem, setDetailItem] = useState([]);
  const [loading,setLoading] = useState(true);
  const { idDetalle } = useParams();

  useEffect(() => {
    const db = getDb();
    
            // db.collection("items")
            //   .get()
            //   .then((resp) => {
            //     setDetailItem(
            //       resp.docs.map((prod) => ({ productId: prod.id, ...prod.data() })).find((prod) => prod.productId === idDetalle)
            //     );
            //   })
            //   .catch((error) => {
            //     console.log(error);
            //   })
            //   .finally(() => setLoading(false));
            //   },[idDetalle]);

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
              },[idDetalle]);
     
     
        

  return (
    <div>
      {loading ?<p></p>:<ItemDetail detailItem={detailItem} />}
    </div>
  );
};

export default ItemDetailContainer;
