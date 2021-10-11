import React from 'react'
import { Link } from "react-router-dom";


function Item({producto}) {

 
  return (
    <div>
      <center>
          <div key={producto.productId}>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{producto.productName}</h5>
                <img
                  src={producto.productImage}
                  className="card-img-top"
                  alt={producto.productName}
                />
                <Link to={`/detalle/${producto.productId}`}>
                  <button className="btn btn-primary">Detalle</button>  
                </Link>

                <p className="card-text">
                  <span>Precio: ${producto.productPrice}</span>
                  <br />
                  <span>Stock: {producto.productStock}</span>
                </p>
              </div>
            </div>
          </div>
          <br/>
      </center>
    </div>
  );
}

export default Item;
