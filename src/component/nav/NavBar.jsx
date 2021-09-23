import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from '../cart/CartWidget'
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