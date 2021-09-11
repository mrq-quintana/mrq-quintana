
import { useState } from 'react';
import Button from './Button';


function ItemCount({stock, inicial}){
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
      if (count<=disponible && disponible > 0)
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
                <Button miOnClick={[sumar,restar,agregar]} />
                <div><span>Agregar a carrito: {count} </span></div>
                <div><span>Stock: {disponible}</span></div>       
              </div>
    )
    
}
export default ItemCount