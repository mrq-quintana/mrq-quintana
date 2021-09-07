import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import  NavDropdown  from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'


const NavBar = () => {
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">King Of Lyons</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Contacto</Nav.Link>
                    <Nav.Link href="#link">Productos</Nav.Link>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Producto 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Producto 2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Producto 3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Producto 4</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>    
        </Navbar>
       
        </>
    )
}

export default NavBar