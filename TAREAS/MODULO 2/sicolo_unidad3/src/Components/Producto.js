import React from "react";
import { Link } from "react-router-dom";

const styles = {
    img: {
        width: '100px',
        backgroundColor: 'red'
    }
}

function Producto (props) {
    const {nombre, precio, thumbnail, id, cantDisponible} = props

    return (
        <div>
            <p><b>{nombre}</b></p>
            <img src={thumbnail} styles={styles.img}></img>
            <p>Precio: ${precio}</p>
            <Link to={'/producto/'+id}>Ver Detalle</Link>
            {/* Hago que el sitio de detalle sea producto + el id de producto */}
            {/* Link redirige hacia la pagina de detalle (indicado en Public.js) */}
            <p>Cantidad disponible: {cantDisponible}</p>
        </div>
    )
}

export default Producto