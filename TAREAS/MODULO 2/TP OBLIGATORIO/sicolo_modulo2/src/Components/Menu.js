import {Link} from "react-router-dom";
import {Button, Navbar, Nav, NavDropdown} from 'react-bootstrap'

function Menu () {

    return (
        <>
            
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Chuchis 2022</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link}  to={'/'} >Home</Nav.Link>
                <Nav.Link as={Link} to={'/register'}>Registro</Nav.Link>
                <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
            </Nav>
            <NavDropdown title="Acciones" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/producto/alta">Alta</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/producto/modificar">Modificar</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
            </Navbar.Collapse>
  
</Navbar>





        </>
    )
}

export default Menu