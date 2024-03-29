import React, { useState } from "react";
import Input from "../Components/Input";
import {Form,Button} from 'react-bootstrap'
import firebase from "../Config/firebase";

function Registro () {

    const [form, setForm] = useState ({nombre: '', apellido: '', email:'', password:''})

    const handleSubmit = async (e) => {
        e.preventDefault()
        let email = form.email
        let password = form.password
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
            const responseUser = await firebase.auth.createUserWithEmailAndPassword(email, password)
            console.log("Response User", responseUser)
            if (responseUser.user.uid) {
                const document = await firebase.db.collection("usuarios")
                    .add ({
                        name: form.nombre,
                        lastName: form.apellido,
                        userId: responseUser.user.uid
                    })
                console.log("document", document)
            }
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
            <h2>Por favor, registrese con sus datos.</h2>
            <Form onSubmit={handleSubmit}>
                <Input type="text" label="Nombre" name="nombre" value={form.nombre} change={handleChange}/>
                <Input type="text" label="Apellido" name="apellido" value={form.apellido} change={handleChange}/>
                <Input type="email" label="Email" name="email" value={form.email} change={handleChange} />
                <Input type="password" label="Contraseña" name="password" value={form.email} change={handleChange}/>
                <Button variant="primary" type="submit">Registrarme</Button>
            </Form>
        </div>
    )
}

export default Registro