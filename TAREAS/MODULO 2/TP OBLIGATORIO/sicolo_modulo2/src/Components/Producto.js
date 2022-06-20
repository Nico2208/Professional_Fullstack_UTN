import { Link } from "react-router-dom";
import { Col, Button, Card } from "react-bootstrap";

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
        <div>
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
                    <Button variant="secondary" as={Link} to={'/producto/'+id}>Detalles</Button>
                    <Button variant="secondary" as={Link} to={'/producto/modificar/'+id}>Modificar</Button>
                    <Button variant="outline-primary" onClick={mostrarMensaje}>Comprar</Button>
                    </Card.Body>
                </Card>
            </Col>
            
        </div>


    )
}

export default Producto;