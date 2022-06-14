import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getProductById } from "../Services/productosServices"

const styles = {
    img: {
        width: '100px',
        backgroundColor: 'red'
    }
}

function Detalle () {
    const {id} = useParams()
    const [response, setResponse] = useState({})
    const [loading, setLoading] = useState (true)
    
    const navigate = useNavigate()
    const handleClick = async () => {
        navigate('/')
    }

    useEffect (
        () => {
            const request = async () => {
                try {
                    setLoading(true)
                    const response = await getProductById(id)
                    setResponse(response.data);
                    setLoading(false)
                } catch (e) {
                    setLoading(true)
                    console.log(e)
                }
            }
            request()
        },
        []
    )

    if(loading){
        return(
            <div>
                Cargando...
            </div>
        )
    } else {
        return (
            <div>
                <h2>{response.title}</h2>
                <img src={response.thumbnail} style={styles.img}></img>
                <p>Precio: ${response.price}</p>
                <p>Cantidad disponible: {response.available_quantity}</p>
                <button type="button" onClick={handleClick}>Volver a la Home</button>
            </div>
        )
    }
}

export default Detalle