import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productoService, { getByIdProductos } from "../Services/productoService";

const styles = {
    img: {
        width: '100px',
        backgroundColor: 'red'
    }
}

function Detalle () {

    const {id} = useParams()
    const [producto,setProducto] = useState({})
    const [loading,setLoading] = useState(true)

    useEffect(
        () => {
            const request = async ()=>{
                
                try{
                    setLoading(true)
                    const response = await getByIdProductos(id) //Hacemos async await usando axios para traer la informacion de la api de ML
                    setProducto(response.data)
                    setLoading(false)
                }catch(e){
                    console.log(e)
                    setLoading(false)
                }
                
            }
            request()
        },
        [id]
    )

    const navigate = useNavigate ()
    const onSubmit = async (data) => {
        navigate("/")
    }


    if (loading) {
        return (
            <div>
                Cargando..
            </div>
        )
    } else {
        return(
            <div>
                <p>{producto.title}</p>
                <p>Precio: ${producto.price}</p>
                <img src={producto.thumbnail} style={styles.img}></img>
                <button onClick={onSubmit}>Volver a la Home</button>
            </div>
        )
    }
}

export default Detalle
