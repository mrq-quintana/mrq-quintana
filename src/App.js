import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import Titulo from './component/Titulo';

function App() {
  return (
      <>
      <Titulo />
      <NavBar />
      <img src={logo} className="App-logo" alt="logo" />
      </>
  );
}

export default App;
