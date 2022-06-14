import { useState } from "react";
import Input from "../Components/Input";

function Login () {
    const [form, setForm] = useState ({usuario:'', password:''})
    const handleSubmit = (e) => {
        console.log("handleSubmit", form)
        e.preventDefault()
    }
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setForm({...form, [name]: value})
    }

    return (
        <div>
            <h2>Bienvenido. Por favor ingrese su nombre y contraseña</h2>
            <form onSubmit={handleSubmit}>
                <Input label="Nombre" name="nombre" type="text" value={form.nombre} change={handleChange}/>
                <Input label="Contraseña" name="password" type="password" value={form.password} change={handleChange}/>
                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default Login