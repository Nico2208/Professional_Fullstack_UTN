import {Link} from "react-router-dom";
import {Button, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import AuthContext from "../Context/AuthContext";

const styles = {
    size: {
        height: "150px",
        backgroundColor: "#820030",
        display: "flex",
        flexDirection: "flex-row",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: "200%",
        fontWeight: "bold",
        fontSize: "large",
        fontFamily: "'Lora', serif"
    },
    title: {
        fontSize: "500%",
        fontFamily: "'Lora', serif"
    }
}



function Menu (props) {
    const {login} = props
    return (
        <>
            <AuthContext.Consumer>
                {
                    context => 
                    <Navbar  expand="lg" style={styles.size}>
                        <Navbar.Brand href="#home" style={styles.title}>La Bodega</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link as={Link}  to={'/'} style={styles.text} >Home</Nav.Link>
                                { !context.userLogin &&
                                    <> 
                                        <Nav.Link as={Link} to={'/register'} style={styles.text}>Registro</Nav.Link>
                                        <Nav.Link as={Link} to={'/login'} style={styles.text}>Login</Nav.Link>
                                    </>
                                }
                                
                            
                                { context.userLogin &&
                                    <>
                                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                                            <NavDropdown.Item as={Link} to="/producto/alta" style={styles.text}>Alta</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/producto/modificar" style={styles.text}>Modificar</NavDropdown.Item>
                                        </NavDropdown>
                                        <Button variant="danger" type="submit" onClick={context.logoutUser}>Logout</Button>
                                    </> 
                                }
                                
                            </Nav>
                        </Navbar.Collapse>
                          
                    </Navbar>
                }
            </AuthContext.Consumer>
        </>
    )
}

export default Menu