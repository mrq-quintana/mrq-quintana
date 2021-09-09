import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import ItemListContainer from './component/ItemListContainer'


function App() {
  
  return (
      <>
        <div className="App"> 
        <NavBar/>
        <ItemListContainer greeting='Soy un producto'/>
        </div>
    
      
      </>
  )
}

export default App;

    