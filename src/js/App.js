import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, createContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../component/nav/NavBar';
import ItemListContainer from '../component/itemList/ItemListContainer'
import ItemDetailContainer from "../component/itemDetail/ItemDetailContainer";
import Cart from '../component/cart/Cart'
import '../styles/App.css';
import { Productos } from "../utils/mock";
import CartContextProvider from "../context/CartContext"
import Final from '../component/finalizar/Final'

export const ContextoApp = createContext('') 

function App() {
  const [state, setState] = useState(Productos);
  function seteoState(item){
    setState(item)
  }
  
  return (
    <CartContextProvider>
        <ContextoApp.Provider value={{state, seteoState}}>
          <BrowserRouter>
                <div className=" container-fluid App"> 
                  <NavBar/>
                      <Switch>
                        <Route exact path='/' >
                          <ItemListContainer greeting='Bienvenido a la tienda'/>
                        </Route>
                        <Route path='/categorias/:idCategorias' component={ItemListContainer} /> 
                        <Route path='/detalle/:idDetalle' component={ItemDetailContainer} /> 
                        <Route exact path='/carrito' component={Cart}/>
                        <Route exact path='/finalizar' component={Final}/>
                      </Switch>      
                </div>
          </BrowserRouter>
        </ContextoApp.Provider>
      </CartContextProvider>
    
  )
  
}

export default App;

    