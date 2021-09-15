import React from 'react'
import { useState, useEffect } from 'react'
import { dbase } from '../utils/mock';
import ItemDetail from './ItemDetail';



const ItemDetailContainer=()=>{
    const[detailItem , setDetailItem] =useState({})
    useEffect(()=>{
        dbase.then(respuesta => setDetailItem(respuesta))

    },[])

    return(
        <div><ItemDetail detailItem={detailItem}/></div>
    )

}

export default ItemDetailContainer