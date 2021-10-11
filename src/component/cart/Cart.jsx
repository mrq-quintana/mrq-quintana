import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import getDb from "../../service/getFirebase";
import firebase from "firebase/app";
import "firebase/firestore";


const Cart = () => {
  const [formCliente, setFormCliente] = useState({
    nombre: "",
    tel: "",
    email: "",
  });

  const { cartList, borrar, precioTotal, borrarLista } = useCartContext();

  function controlSubmit(e) {
    e.preventDefault();

    let compra = {};

    compra.fecha = firebase.firestore.Timestamp.fromDate(new Date());

    compra.comprador = formCliente;

    compra.valorCompra = precioTotal();

    compra.detalle = 
        cartList.map((compraItem) => {
                    const id = compraItem.item.productId;
                    const title = compraItem.item.productName;
                    const qty = compraItem.cantidad;
                    const unitPrice = compraItem.item.productPrice;
                    const totalPrice = compraItem.item.productPrice * compraItem.cantidad;

      return { id, title, totalPrice, qty, unitPrice };
    });

    const db = getDb();

                db.collection("compra")
                .add(compra)
                .then((resp) => alert ('Gracias por su compra, su numero de compra es: ' + resp.id))
                .catch((err) => console.log(err))
                .finally(() =>
                    setFormCliente({
                                    nombre: "",
                                    tel: "",
                                    email: "",
                                    email2: "",
                                    }),

                                   borrarLista(),
                                   
                                   

                                   
                )

    // //Actualiza todos los items que estan en el listado de Cart del CartContext
    const itemAct =
                db.collection('items')
                .where(
                    firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.item.productId)
                )

    const batch = db.batch();

    // // por cada item restar del stock la cantidad de el carrito

    itemAct.get()
    .then( collection=>{
        collection.docs.forEach(docSnapshot => {
            batch.update(docSnapshot.ref, {
                productStock: docSnapshot.data().productStock - cartList.find(item => item.item.productId === docSnapshot.id).cantidad
            })
        })

        batch.commit().then(res =>{
            console.log('resultado batch:', res)
        })
    }) 
  }


  function controlChange(e) {
    setFormCliente({
      ...formCliente,
      [e.target.name]: e.target.value,
    });
  }

  if (cartList.length === 0)
    return (
      <>
        <h2>Nada por aqui</h2>
        <Link to={`/`}>
          <button className="btn btn-danger">Vayamos a comprar</button>
        </Link>
      </>
    );

  return (
    <>
      <div>
        <center>
          {cartList.map((carritoItem) => (
            <div key={carritoItem.item.productId}>
              <h2>{carritoItem.item.productName}</h2>
              <img
                alt={carritoItem.item.productName}
                src={carritoItem.item.productImage}
              />
              <h2>${carritoItem.item.productPrice}</h2>
              <h3>{carritoItem.cantidad}</h3>
              <h2>${carritoItem.cantidad * carritoItem.item.productPrice}</h2>
              <button onClick={() => borrar(carritoItem)}>Eliminar</button>
            </div>
          ))}
          <div>{precioTotal()}</div>
          <div>
            <form onSubmit={controlSubmit} onChange={controlChange}>
              <input
                type="text"
                placeholder="Nombre"
                name="nombre"
                value={formCliente.nombre}
              />
              <input
                type="text"
                placeholder="Telefono Personal"
                name="tel"
                value={formCliente.tel}
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formCliente.email}
              />
              <input
                type="text"
                placeholder="Confirme Email "
                name="email2"
                value={formCliente.email2}
              />

                {( (formCliente.nombre !== ' ' && formCliente.tel !== ' ') && (formCliente.email !== formCliente.email2)) ? <div>Completar todos los campos</div> : <div><button>Finalizar</button></div>}
              


            </form>
          </div>
        </center>
      </div>
    </>
  );
};

export default Cart;
