import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/Item.css'


function Item({ producto }) {


  return (
    
        <div className="col-sm-12 col-md-6 col-lg-4 container-app">
          <div key={producto.productId} className="cord">
            <img
              src={producto.productImage}
              className="cord__image"
              alt={producto.productName}
            />
            <div className="card-body">
              <h5 className="card-title">{producto.productName}</h5>

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
     
    
  );
}

export default Item;
