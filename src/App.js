import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import ItemListContainer from './component/ItemListContainer'

function App() {
  const [count, setCount] = useState(0);
  
  const sumar = () =>{
    setCount(count + 1)
  }
  const restar = () =>{
    setCount(count - 1)
  }

  const mostrar = () =>{
    console.log(count)
  }
  return (
      <>
        <div className="App"> 
        <NavBar/>
        <ItemListContainer greeting='Soy un producto'/>

              <div>
                <button onClick={sumar}>+</button>
                <button onClick={mostrar}>Finalizar</button>
                <button onClick={restar}>-</button>
                <div>{count}</div>
                <div className="muestra"></div>           
              </div>
        </div>
    
      
      </>
  )
}

export default App;

    