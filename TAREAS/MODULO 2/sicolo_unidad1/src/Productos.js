import React, { useState } from "react";

function Productos (props) {

    const {nombre, precio, descripcion, cantDisponible} = props; 

    const [ compra, setCompra ] = useState (" ");

    const mostrarMensaje = () => {
        setCompra("Gracias por su compra.")
    }

    
    
    return (
        <>
            <div>
                NOMBRE: {nombre}
                <br/>
                PRECIO: {precio}
                <br/>
                <br/>
                CANTIDAD DISPONIBLE: {cantDisponible}
            </div>
            <button onClick={mostrarDescricion}>Descripción</button>
            {descripcion}
            <button onClick={mostrarMensaje}>Comprar</button>
            {compra}
        </>
    );
}

export default Productos;