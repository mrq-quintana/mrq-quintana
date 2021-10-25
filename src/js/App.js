import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../component/nav/NavBar';
import ItemListContainer from '../component/itemList/ItemListContainer'
import ItemDetailContainer from "../component/itemDetail/ItemDetailContainer";
import Cart from '../component/cart/Cart'
import '../styles/App.css';
import CartContextProvider from "../context/CartContext"




function App() {
 
  return (
    <CartContextProvider>     
        <BrowserRouter>
          <div className=" container-fluid App">
            <NavBar />
            <Switch>
              <Route exact path='/' >
                <ItemListContainer greeting='Bienvenido a la tienda' />
              </Route>
              <Route path='/categorias/:idCategorias' component={ItemListContainer} />
              <Route path='/detalle/:idDetalle' component={ItemDetailContainer} />
              <Route exact path='/carrito' component={Cart} />
            </Switch>
          </div>
        </BrowserRouter>
    </CartContextProvider>

  )

}

export default App;

