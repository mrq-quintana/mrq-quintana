import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from '../cart/CartWidget'
import { TiShoppingCart } from 'react-icons/ti'
import { GiShoppingCart } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext"


const NavBar = (props) => {
    const { count } = props
    const { sumaCarrito } = useCartContext()

    return (
        // <>
        //     <Navbar bg="dark" expand="lg">
        //         <Container>
        //             <Link to='/' >
        //                 <Navbar.Brand>Tiendashop</Navbar.Brand>
        //             </Link>
        //                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //                     <Navbar.Collapse id="basic-navbar-nav">
        //                         <Nav className="me-auto">
        //                             <Link to='/categorias/adultos' >
        //                                 <Nav>Adultos</Nav>
        //                             </Link>
        //                             <Link to={'/categorias/chicos'} >
        //                                 <Nav>Niños</Nav>
        //                             </Link>

        //                             <Link to='/carrito'>
        //                                     <CartWidget count={count}/> 
        //                             </Link>
        //                             {sumaCarrito()}
        //                         </Nav>
        //                     </Navbar.Collapse>              
        //         </Container> 
        //     </Navbar>     
        // </>
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid myNavBar">
                    <Link to='/' >
                        <span>Tiendashop</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to='/categorias/adultos' >
                                <span>Adultos</span>
                            </Link>
                            <Link to={'/categorias/chicos'} >
                                <span>Niños</span>
                            </Link>

                            <Link to='/carrito'>
                                <div className="cart">
                                    <TiShoppingCart className="cart" />

                                </div>
                            </Link>
                            <div className="cartNumber">
                                {sumaCarrito()}
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar