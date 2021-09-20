import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown  from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to='/' >
                    <Navbar.Brand>King Of Lyons</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                            <Link to='/categorias/adultos' >
                                <Nav>Adultos</Nav>
                            </Link>
                            <Link to={'/categorias/chicos'} >
                                <Nav>Niños</Nav>
                            </Link>
                                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Producto 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Producto 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Producto 3</NavDropdown.Item>
                                </NavDropdown>             
                                <Link to='/carrito'>
                                    <CartWidget/> 
                                </Link>
                            </Nav>
                        </Navbar.Collapse>              
            </Container> 
        </Navbar>     
        </>
    )
}

export default NavBar