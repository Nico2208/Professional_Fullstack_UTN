import { useEffect, useState } from "react";
import { getAllProductos } from "../Services/productosServices";
import { Row, Button } from "react-bootstrap";
import Producto from "./Producto"
import Loading from "./Loading";

function Productos () {
    const [listadoProductos, setListadoProductos] = useState ([])
    const [loading, setLoading] = useState (true)
    const [item, setItem] = useState ("motorola")

    useEffect (
        () => {
            const request = async () => {
                try {
                    setLoading(true)
                    const response = await getAllProductos(item)
                    console.log("response, ", response)
                    setListadoProductos(response)
                    setLoading(false)

                } catch (e) {
                    console.log(e)
                    setLoading (true)
                }
            }
            request ()
        },
        [item] //Array de dependencias con item hara que se actualice la consulta a la bd cada vez que item sea modificado
    )

    const cambiarIpod = () => {
        setItem("ipod")
    }

    const resetear = () => {
        setItem("motorola")
    }

    return(
        <>
        
            <Loading loading={loading}>
                <div>
                    <h2>Listado de Productos Motorola</h2>
                    {listadoProductos.map(element => <Producto nombre={element.data().name} id={element.id} precio={element.data().price} thumbnail={element.data().img}/>)}
                </div>
            </Loading>
        </>
    )


}

export default Productos
