import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/ItemList";
import getDb from "../../service/getFirebase";

function ItemListContainer(props) {
  const [productos, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategorias } = useParams();

  useEffect(() => {
    const db = getDb();
    const dbConsulta = idCategorias ? db.collection("items").where("category", "==", idCategorias)
                                      :
                                      db.collection("items")
    
    dbConsulta.get()
                  .then((resp) => {
                    setProducts(resp.docs.map((prod) => ({ productId: prod.id, ...prod.data()}) ))
                  })
                  .catch((error) => console.log(error))
                  .finally(() => setLoading(false));
                }
      , [idCategorias]);

return (
  <>

    {loading ? <h5>Cargando productos...</h5> : <div><h5 className="card-title">{props.greeting}</h5> <ItemList productos={productos} /></div>}
  </>
);
}
export default ItemListContainer;
