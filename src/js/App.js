import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../component/NavBar';
import ItemListContainer from '../component/ItemListContainer'
import ItemDetailContainer from "../component/ItemDetailContainer";
import Cart from '../component/Cart'
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <BrowserRouter>
        <>
          <div className="App"> 
            <NavBar/>
                <Switch>
                  <Route exact path='/' >
                    <ItemListContainer greeting='Bienvenido a la tienda'/>
                  </Route>
                  <Route path='/categorias/:idCategorias' component={ItemListContainer} /> 
                  <Route path='/detalle/:idDetalle' component={ItemDetailContainer} /> 
                  <Route exact path='/carrito' component={Cart}/>
                </Switch>
    
          </div>
        </>
    </BrowserRouter>
  )
}

export default App;

    