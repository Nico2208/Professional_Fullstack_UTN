import { useState, useContext} from "react";
import Input from "../Components/Input";
import {Button, Form} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';
import firebase from "../Config/firebase";
import AlertCustom from "../Components/AlertCustom";
import {loginMessage} from "../Utils/errorMessage"
import AuthContext from "../Context/AuthContext";

function Login (props) {
    const {setLogin} = props
    const navigate = useNavigate();
    const [form, setForm] = useState ({email:'', password:''})
    const [alert, setAlert] = useState({text:'', variant:''})
    const context = useContext(AuthContext)
    const handleSubmit = async (e) => {
        try{
            e.preventDefault()
            let email = form.email
            let password = form.password
            const responseUser = await firebase.auth.signInWithEmailAndPassword (email, password)
            console.log("responseUser, ", responseUser)
            console.log("responseUser, ", responseUser)
            if(responseUser.user.uid) {
                const userInfo = await firebase.db.collection("usuarios")
                    .where("userId", "==", responseUser.user.uid)
                    .get()
                if(userInfo) {
                    const nombre = userInfo.docs[0]?.data().name
                    setLogin(true)
                    setAlert({variant: 'success', text: 'Bienvenido ' + nombre})
                    context.loginUser(userInfo.docs[0]?.data())
                }
            }
        } catch (error) {
            console.log(error)
            setAlert({variant:'danger', text:loginMessage[error.code]})
        }

    }
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setForm({...form, [name]: value})
    }

    return (
        <div>
            <h2>Bienvenido. Por favor ingrese su nombre y contraseña</h2>
            <Form onSubmit={handleSubmit}>
                <Input label="Email" name="email" type="email" value={form.email} change={handleChange}/>
                <Input label="Contraseña" name="password" type="password" value={form.password} change={handleChange}/>
                <Button variant="primary" type="submit">Ingresar</Button>
                <AlertCustom {...alert}/>
            </Form>
        </div>
    )
}

export default Login