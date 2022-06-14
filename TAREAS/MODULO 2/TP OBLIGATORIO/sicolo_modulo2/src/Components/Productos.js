import { useEffect, useState } from "react";
import { getAllProductos } from "../Services/productosServices";
import Producto from "./Producto";

function Productos () {
    const [productos, setProductos] = useState ({})
    const [listadoProductos, setListadoProductos] = useState ([])
    const [loading, setLoading] = useState (true)
    const [item, setItem] = useState ("motorola")

    useEffect (
        () => {
            const request = async () => {
                try {
                    setLoading(true)
                    const response = await getAllProductos(item)
                    setProductos(response.data)
                    setListadoProductos(response.data.results)
                    setLoading(false)

                } catch (e) {
                    console.log(e)
                    setLoading (true)
                }
            }
            request ()
        },
        [item]
    )

    const cambiarIpod = () => {
        setItem("ipod")
    }

    const resetear = () => {
        setItem("motorola")
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
                <h2>Listado de Productos Motorola</h2>
                <button onClick={cambiarIpod}>Filtrar iPod</button>
                <button onClick={resetear}>Resetear listado</button>
                {listadoProductos.map(element => <Producto nombre={element.title} id={element.id} precio={element.price} thumbnail={element.thumbnail}/>)}
            </div>
        )
    }

}

export default Productos