import { Link } from "react-router-dom";

const styles = {
    img: {
        width: '100px',
        backgroundColor: 'red'
    }
}
function Producto (props) {
    const {nombre, precio, thumbnail, id} = props

    const mostrarMensaje = () => {
        alert("Gracias por su compra!")
    }

    return (
        <div>
            <p><b>{nombre}</b></p>
            <p>${precio}</p>
            <img src={thumbnail} style={styles.img}></img>
            <div>
                <Link to={'/producto/'+id}>Detalle</Link>
            </div>
            <button onClick={mostrarMensaje}>Comprar</button>
            
        </div>
    )
}

export default Producto;