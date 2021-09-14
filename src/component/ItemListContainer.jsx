import ItemCount from "./ItemCount";

// import ItemList from "./ItemList"
import Productos from "./Productos";

const db = new Promise((respuesta, rechazo) => {
  let resp = "200";
  if (resp === "200") {
    setTimeout(() => {
      respuesta(Productos);
    }, 3000);
  } else {
    rechazo("Error 404");
  }
});
db.then((resp) => {console.log(resp);}).catch((error) => {
  console.log(error);
});

function ItemListContainer(props) {
  
  const agregar = (cant,stockDisponible)=>{        
        if ( stockDisponible >= 1 ){
           
            console.log('Compraste ' + cant + ' unidades quedan ' + (stockDisponible - cant) + ' disponibles!')
            
        } else {
            console.log('Ya no queda mas Stock Disponible')
        }
  }

  return (
    <>
      {Productos.map((producto) => (
        <div key={producto.productId}>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <img src={producto.productImage} className="card-img-top" alt={producto.productName}/>
              <h5 className="card-title">{props.greeting}</h5>
              <h4 className="card-title">{producto.productName}</h4>
              <p className="card-text">
                ${producto.productPrice}
                <br/>
                ${producto.productSalePrice}
              </p>
              {/* <ItemList/> */}
              <ItemCount stock={5} inicial={0} miOnClick={agregar}/>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ItemListContainer;
