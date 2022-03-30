import React, {Component} from "react";
import Formulario from "./Formulario";
import Titulo from './Titulo';

import '../styles/contenedor.css';

class Contenedor extends Component{
    render () {
        return (
            <div className="container">
                <Titulo titulo="Registro"/>
                <Formulario/>
            </div>
        )
    }
}

export default Contenedor;