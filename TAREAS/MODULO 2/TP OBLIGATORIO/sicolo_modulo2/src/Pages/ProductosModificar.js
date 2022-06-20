import React, { useEffect, useState } from "react";
import Input from "../Components/Input";
import {Form,Button} from 'react-bootstrap'
import firebase from "../Config/firebase";
import {useParams} from "react-router-dom";
import {getProductById} from "../Services/productosServices"
import { useForm } from "react-hook-form";

function ProductosModificar () {

    const [form, setForm] = useState ({name: '', price: '', description:''})
    const {id} = useParams();
    const {setValue} = useForm()

    useEffect(
        ()=>{
            const request = async () => {
                try {
                    const response = await getProductById(id)
                    console.log("response, ", response)
                    setValue("name", response.data().name)
                    setValue("price", response.data().price)
                    setValue("description", response.data().description)
                } catch (e) {
                    console.log(e)
                }
            }
            request()
        },
        [id, setValue]
    )

    const handleSubmit = async (e) => {
        e.preventDefault()
        let name = form.name
        let price = form.price
        let description = form.description
        try{
            const product = await firebase.db.collection("productos")
                .add({
                    name: name,
                    price: price,
                    description: description
                })
            console.log("producto ", product)
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setForm ({...form, [name]:value})
    }

    const handleDelete = async () => {
        const document = await firebase.db.doc("productos/" + id)
            .delete()
        console.log(document)
    }
    return(
        <div>
            <h2>Modificar Producto</h2>
            <Button variant="danger" type="submit" onClick={handleDelete}>Eliminar</Button>
            <Form onSubmit={handleSubmit}>
                <Input type="text" label="Nombre" name="name" value={form.name} change={handleChange}/>
                <Input type="text" label="Precio" name="price" value={form.price} change={handleChange}/>
                <Input type="text" label="Descripcion" name="description" value={form.description} change={handleChange} />
                <Button variant="primary" type="submit">Guardar</Button>
            </Form>
        </div>
    )
}

export default ProductosModificar