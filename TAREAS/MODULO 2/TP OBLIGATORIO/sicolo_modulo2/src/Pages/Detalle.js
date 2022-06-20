import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getProductById } from "../Services/productosServices"
import {Button, Card} from 'react-bootstrap'
import Loading from "../Components/Loading"

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
                    setResponse(response.data());
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

    return(
        <Loading loading={loading}>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={response.img} />
                    <Card.Body>
                        <Card.Title>{response?.name}</Card.Title>
                        <Card.Text>
                            <p>Precio: ${response?.price}</p>
                            <p>Cantidad disponible: {response?.available_quantity}</p>
                        </Card.Text>
                        <Button variant="primary" onClick={handleClick}>Volver a la Home</Button>
                    </Card.Body>
                </Card>
            </div>
        </Loading>
    )
}

export default Detalle