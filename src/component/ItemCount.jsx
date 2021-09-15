import React from 'react'
import { useState } from 'react';

function ItemCount({stock, inicial, miOnClick}){
  const [count, setCount] = useState(inicial);
  const [disponible, setDisponible] = useState(stock);

  const restar = () =>{
    if(disponible>1 && count>=1){
          setCount(count - 1)
      } else {
          setDisponible(disponible)
      }
  }

  const sumar = () =>{
      if (count<disponible && disponible > 0)
      setCount(count + 1)
  }

  const handlerAgregar=()=>{
    miOnClick(count,disponible)
    setCount(0)
    setDisponible(disponible - count)
  }
  
    return (
            <div>                
                <button type="button" className="btn btn-secondary btn-sm" onClick={restar}> - </button>
                <button type="button" className="btn btn-secondary btn-sm" onClick={handlerAgregar}> Agregar </button>
                <button type="button" className="btn btn-secondary btn-sm" onClick={sumar}> + </button>
                <div><span>Agregar a carrito: {count} </span></div>
                <div><span>Stock: {disponible}</span></div>       
              </div>
    )
    
}
export default ItemCount