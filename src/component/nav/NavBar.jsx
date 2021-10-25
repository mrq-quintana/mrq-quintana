import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext"
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo_red from '../../img/Logo_red.png';
import CartWidget from '../cart/CartWidget'


const NavBar = () => {

    const { sumaCarrito } = useCartContext()

    return (
        <>
            <Navbar className="myNavBar" expand="lg" variant="light">
                <Container>
                    <img
                        src={Logo_red}
                        alt=""
                        width="120"
                        height="100"

                    />
                    <Navbar.Brand>
                        <Link to='/' >
                            <span className="titulo">King of Lyons</span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="myNavBarList">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to='/categorias/Leon' >
                                    <span className="subTitulo">Leon</span>
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={'/categorias/Cacique'} >
                                    <span className="subTitulo">Cacique</span>
                                </Link>
                            </Nav.Link>
                            <Nav.Link className="carrito">
                                <div className="carrito">
                                    <Link to='/carrito'>
                                        <CartWidget />
                                    </Link>
                                    <div className="cartNumber">
                                        {sumaCarrito()}
                                    </div>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar