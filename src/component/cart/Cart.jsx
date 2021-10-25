import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { BsFillTrashFill } from "react-icons/bs";
import getDb from "../../service/getFirebase";
import firebase from "firebase/app";
import "firebase/firestore";



const Cart = () => {
  const [idCompra, setIdCompra] = useState([])
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
      // .then((resp) => alert('Gracias por su compra, su numero de compra es: ' + resp.id))
      .then((resp) => setIdCompra(resp.id)
      )
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


    const itemAct =
      db.collection('items')
        .where(
          firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.item.productId)
        )

    const batch = db.batch();

    itemAct.get()
      .then(collection => {
        collection.docs.forEach(docSnapshot => {
          batch.update(docSnapshot.ref, {
            productStock: docSnapshot.data().productStock - cartList.find(item => item.item.productId === docSnapshot.id).cantidad
          })
        })

        batch.commit().then(resp => {
          console.log('resultado batch:', resp)
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
        <h5>{(idCompra.length !== 0) ? 'Su numero de compra es:' + idCompra : '¿Ya finalizo su compra?, Aguarde...'}</h5>
        <Link to={`/`}>
          <button className="btn btn-danger">Comprar</button>
        </Link>

      </>
    );

  return (
    <>
    {/* Formulario */}
    <div><h4 className="card-title">Vamos a finalizar su compra</h4></div>
    <div>
        <form onSubmit={controlSubmit} onChange={controlChange}>
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            value={formCliente.nombre}
            onChange={controlChange}
          />
          <input
            type="text"
            placeholder="Telefono Personal"
            name="tel"
            value={formCliente.tel}
            onChange={controlChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={formCliente.email}
            onChange={controlChange}
          />
          <input
            type="text"
            placeholder="Confirme Email "
            name="email2"
            value={formCliente.email2}

          />
          {((formCliente.email !== formCliente.email2) && formCliente.nombre !== (" ") && formCliente.tel !== (" ")) ?

            <div>Completar todos los campos</div>
            :
            <button className="btn">Ultimo paso</button>
          }
        </form>
      </div>
      <div>
        {cartList.map((carritoItem) => (
          <div className="container bcontent" key={carritoItem.item.productId}>           
            <hr />
            <div className="card cord" width="500">
              <div className="row no-gutters">
                  <h5 className="card-title">{carritoItem.item.productName}</h5>
                <div className="col-sm-5">
                  <img className="card-img cord_image_cart" alt={carritoItem.item.productName} src={carritoItem.item.productImage} />
                </div>
                <div className="col-sm-7 detalle ">
                  <div className="card-body detalle_cart">
                    <div>
                      <p className="card-text">Precio unitario: ${carritoItem.item.productPrice}</p>
                    
                      <p className="card-text">Cantidad: {carritoItem.cantidad}</p>
                    
                      <p className="card-text">Precio cantidad: ${carritoItem.cantidad * carritoItem.item.productPrice}</p>
                    </div>
                    <div>
                      <button className="btn_cart" onClick={() => borrar(carritoItem)}><BsFillTrashFill /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <p>Total de la compra: ${precioTotal()}</p>
      </div>
    </>
  );
};

export default Cart;
