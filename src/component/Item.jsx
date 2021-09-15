import ItemCount from "./ItemCount";

function Item({producto}) {
  const agregar = (cant, stockDisponible) => {
    if (stockDisponible >= 1) {
      console.log(
        "Compraste " +
          cant +
          " unidades quedan " +
          (stockDisponible - cant) +
          " disponibles!"
      );
    } else {
      console.log("Ya no queda mas Stock Disponible");
    }
  };
  return (
    <div key={producto.productId}>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <img
            src={producto.productImage}
            className="card-img-top"
            alt={producto.productName}
          />
          <h5 className="card-title">{producto.productName}</h5>
          <button className="btn btn-link">Descripcion</button>
          <p className="card-text">
            <span>Precio: ${producto.productPrice}</span>
            <br />
            <span>HotSale: ${producto.productSalePrice}</span>
          </p>
          <ItemCount
            stock={producto.productStock}
            inicial={0}
            miOnClick={agregar}
          />
        </div>
      </div>
    </div>
  );
}

export default Item;
