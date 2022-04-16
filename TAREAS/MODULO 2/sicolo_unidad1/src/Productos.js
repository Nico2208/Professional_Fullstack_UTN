import React, { useState } from "react";

function Productos (props) {

    const {nombre, descripcion, sku, cantDisponible} = props; 

    const [ compra, setCompra ] = useState (" ");

    const mostrarMensaje = () => {
        setCompra("Gracias por su compra.")
    }
    
    return (
        <>
            <div>
                NOMBRE: {nombre}
                <br/>
                DESCRIPCION: {descripcion}
                <br/>
                SKU: {sku}
                <br/>
                CANTIDAD DISPONIBLE: {cantDisponible}
            </div>
            <button onClick={mostrarMensaje}>Comprar</button>
            {compra}
        </>
    );
}

export default Productos;