import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import CartWidget from './component/CartWidget'
import ItemListContainer from './component/ItemListContainer'

function App() {

  return (
      <>
      <NavBar/>
      <ItemListContainer greeting='Soy un producto'/>
      </>
  );
}

export default App;
