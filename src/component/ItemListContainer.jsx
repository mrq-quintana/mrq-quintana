import React from 'react'
import { useEffect, useState } from "react";
import ItemList from "./ItemList"
import {db} from "../utils/mock";


function ItemListContainer(props) {
  const [productos, setProducts] = useState([])
  const [loading, setLoading] = useState(true)


useEffect(()=>{
  db.then(
    resp =>{
      setProducts(resp)}
    )
    .catch(
      (error) => {
      console.log(error)}
      )
      .finally(()=>setLoading(false));
      },[])

      console.log(productos)
  
  return (
    <div>
     <h1 className="card-title">{props.greeting}</h1>
      {loading ? <h2>Cargando pagina</h2> : <ItemList productos={productos}/>}
    </div>    
  )
}

export default ItemListContainer;
