import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import { Col, Button, Card } from "react-bootstrap";

const styles = {
    img: {
        height: "50px",
        backgroundColor: 'red',
        margin: '5px'
    }
}
function Acciones (props) {
    const {id} = props

    const mostrarMensaje = () => {
        alert("Gracias por su compra!")
    }

    return (
        <>
            <AuthContext.Consumer>
                {
                    context =>
                    <>
                        <Button variant="secondary" as={Link} to={'/producto/'+id}>Detalles</Button>
                        {
                            context.userLogin &&
                            <>
                                <Button variant="secondary" as={Link} to={'/producto/modificar/'+id}>Modificar</Button>
                                <Button variant="outline-primary" onClick={mostrarMensaje}>Comprar</Button>
                            </> 
                        }
                    </>
                }
            </AuthContext.Consumer>
        </>
    )
}

export default Acciones;