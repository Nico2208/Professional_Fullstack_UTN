import React, { Component } from "react";
import InputText from "./InputText";
import InputPass from "./InputPass";
import InputPhone from "./InputPhone";
import InputMail from "./InputMail";

class Formulario extends Component {
    render(){
        return (
            <div className="main">
            <form method="post">
                <InputText nombre="Nombre"/>
                <InputText nombre="Apellido"/>
                <InputMail nombre="Mail"/>
                <InputPhone nombre="Telefono"/>
                <InputPass nombre="Contraseña"/>
                <InputPass nombre="Confirmar contraseña"/>
                
                <button type="submit" class="button">Registrarse</button>
            </form>
        </div>
        )
    }
}

export default Formulario;