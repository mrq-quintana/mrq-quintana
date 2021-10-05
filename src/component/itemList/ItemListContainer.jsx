import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/ItemList";
// import { db } from "../../utils/mock";
import getDb from "../../service/getFirebase";

function ItemListContainer(props) {
  const [productos, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategorias } = useParams();

  useEffect(() => {
    const db = getDb();

    if (idCategorias) {
      db.collection("items")
        .where("category", "==", idCategorias)
        .get()
        .then((resp) => {
          setProducts(
            resp.docs.map((prod) => ({ productId: prod.id, ...prod.data() }))
          );
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));
        
    } else {

      db.collection("items")
        .get()
        .then((resp) => {
          setProducts(
            resp.docs.map((prod) => ({ productId: prod.id, ...prod.data() }))
          );
        })

        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [idCategorias]);

  return (
    <div>
      <h1 className="card-title">{props.greeting}</h1>
      {loading ? <h2>Cargando pagina</h2> : <ItemList productos={productos} />}
    </div>
  );
}
export default ItemListContainer;
