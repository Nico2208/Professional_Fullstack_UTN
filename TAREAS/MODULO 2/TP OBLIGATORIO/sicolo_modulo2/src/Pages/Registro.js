import React, { useState } from "react";
import Input from "../Components/Input";

function Registro () {

    const [form, setForm] = useState ({nombre: '', apellido: '', email:'', password:''})

    const handleSubmit = (e) => {
        console.log("handleSubmit", form)
        e.preventDefault()
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setForm ({...form, [name]:value})
    }

    return(
        <div>
            <h2>Por favor, registrese con sus datos.</h2>
            <form onSubmit={handleSubmit}>
                <Input type="text" label="Nombre" name="nombre" value={form.nombre} change={handleChange}/>
                <Input type="text" label="Apellido" name="apellido" value={form.apellido} change={handleChange}/>
                <Input type="email" label="Email" name="email" value={form.email} change={handleChange} />
                <Input type="email" label="Contraseña" name="password" value={form.email} change={handleChange}/>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}

export default Registro