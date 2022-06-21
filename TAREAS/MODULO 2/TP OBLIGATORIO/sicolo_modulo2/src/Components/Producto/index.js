import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import { Col, Button, Card } from "react-bootstrap";
import Acciones from "./Acciones";

const styles = {
    img: {
        height: "50px",
        backgroundColor: 'red',
        margin: '5px'
    }
}
function Producto (props) {
    const {nombre, precio, thumbnail, id} = props

    const mostrarMensaje = () => {
        alert("Gracias por su compra!")
    }

    return (
        <>
            
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={thumbnail} style={styles.img}/>
                    <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    {
                        precio && 
                        <Card.Text>
                            <p>${precio}</p>
                        </Card.Text>
                    }
                    <Acciones/>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Producto;