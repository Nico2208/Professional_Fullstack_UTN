import React, { useState } from "react";
import Input from "../Components/Input";
import {Form,Button} from 'react-bootstrap'
import firebase from "../Config/firebase";

function ProductosAlta () {

    const [form, setForm] = useState ({name: '', price: '', description:''})

    const handleSubmit = async (e) => {
        e.preventDefault()
        let name = form.name
        let price = form.price
        let description = form.description
        // firebase.auth.createUserWithEmailAndPassword(email, password)
        //     .then( data =>{
        //         console.log("Usuario creado", data.user.uid)
        //         firebase.db.collection("usuarios").add({
        //             nombre: form.nombre,
        //             apellido: form.apellido,
        //             email: form.email,
        //             userId: data.user.uid
        //         })
        //         .then((data) => {
        //             console.log(data)
        //         })
        //         .catch((error) => {
        //             console.log(error)
        //         })
        //     })
        //     .catch((error)=>{
        //         console.log("Error", error)
        //     })
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

    return(
        <div>
            <h2>Alta de Productos</h2>
            <Form onSubmit={handleSubmit}>
                <Input type="text" label="Nombre" name="name" value={form.name} change={handleChange}/>
                <Input type="text" label="Precio" name="price" value={form.price} change={handleChange}/>
                <Input type="text" label="Descripcion" name="description" value={form.description} change={handleChange} />
                <Button variant="primary" type="submit">Guardar</Button>
            </Form>
        </div>
    )
}

export default ProductosAlta