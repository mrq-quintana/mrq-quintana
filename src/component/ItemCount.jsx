
import { useState } from 'react';


function ItemCount({stock, inicial}){

  const [count, setCount] = useState(inicial);
  const [disponible, setDisponible] = useState(stock);

  const restar = () =>{
      console.log(disponible)
    if(disponible >1){
    setCount(count - 1)
    } else {
        setDisponible(disponible)
    }

  }

  const sumar = () =>{
    setCount(count + 1)
  }

  const agregar = ()=>{        
        if ( disponible >= 1 ){
            console.log('Compraste ' + count + ' unidades quedan ' + (disponible - count) + ' disponibles!')
            setDisponible(disponible - count)
            setCount(0)
        } else {
            console.log('Ya no queda mas Stock Disponible')
        }
    
  }
  
    return (
            <div>
                <button onClick={restar}>-</button>
                <button onClick={agregar}>Finalizar</button>
                <button onClick={sumar}> + </button>
                
                <div><span>Agregar a carrito: {count} </span></div>
                <div><span>Stock: {disponible}</span></div>       
              </div>
    )
    
}
export default ItemCount