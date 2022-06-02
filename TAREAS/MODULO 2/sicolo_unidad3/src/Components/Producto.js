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
            <p>{precio}</p>
            <Link to={'/producto/'+id}>Ver Detalle</Link>
        </div>
    )
}

export default Producto