import React, { useEffect, useState } from "react";
import Producto from "./Producto";
import productoService, { getAllProductos } from "../Services/productoService";

function Productos () {
    const [loading, setLoading] = useState (true)
    const [response, setResponse] = useState ({})
    const [listadoProductos, setListadoProductos] = useState ([])
    const [filtrar, setFiltrar] = useState("ipod")

    useEffect(
        () => {
            const request = async () => {
                setLoading(true)
                const response = await getAllProductos(filtrar)
                setResponse(response.data)
                setListadoProductos(response.data.results)
                setLoading(false)
            }
            request ()
        },
        [filtrar]
    )

    const filtrarMotorola = () => {
        setFiltrar ("motorola")
    }

    const resetear = () => {
        setFiltrar ("ipod")
    }

    if (loading) {
        return (
            <div>
                Cargando...
            </div>
        )
    } else {
        return (
            <div>
                <h2>Listado de productos ipod</h2>
                <button onClick={filtrarMotorola} >Filtrar Motorola</button> 
                <button onClick={resetear}>Resetear</button>
                {listadoProductos.map( elemento =>
                    <Producto nombre={elemento.title} precio={elemento.price} thumbnail={elemento.thumbnail} id={elemento.id} cantDisponible={elemento.available_quantity} />)
                }
            </div>
        )
    }
}

export default Productos;