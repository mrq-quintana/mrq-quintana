import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/Item.css'


function Item({ producto }) {
  return (
    <div>
      <div className="col-sm-12 col-lg-6 container-app">
        <div key={producto.productId} className="cord ">
          <h5 >{producto.productName}</h5>
          <img
            src={producto.productImage}
            className="cord_image"
            alt={producto.productName}
          />
          <div className="card-body">
            <Link to={`/detalle/${producto.productId}`}>
              <button className="btn">Detalle</button>
            </Link>
            <p className="card-text">
              <span>Precio: ${producto.productPrice}</span>
              <br />
              <span>Stock: {producto.productStock}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
