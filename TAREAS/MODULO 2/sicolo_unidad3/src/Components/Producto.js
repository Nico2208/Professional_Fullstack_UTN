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
            <p>Cantidad disponible: {cantDisponible}</p>
        </div>
    )
}

export default Producto