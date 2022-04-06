import React,{Component} from "react"
import Noticia from "./Noticia"

class Noticias extends Component{
    constructor(){
        super()
        // El estado es un objeto
        this.state={
            noticias:[
                {
                    id:1,
                    titulo:"Guerra en Ucrania",
                    descripcion:"Descripcion Guerra en Ucrania"
                }
                ,
                {
                    id:2,
                    titulo:"Precio del dolar",
                    descripcion:"Descripcion Precio del dolar"
                }
            ],
            titulo:"Listados Noticias"
        }
    }
    /*filtrarNoticias(){
        this.setState({
            noticias:[
                {
                    id:1,
                    titulo:"Guerra en Ucrania",
                    descripcion:"Descripcion Guerra en Ucrania"
                }
            ]
        })
    }*/
    filtrarNoticias = ()=>{
        this.setState({
            noticias:[
                {
                    id:1,
                    titulo:"Guerra en Ucrania",
                    descripcion:"Descripcion Guerra en Ucrania"
                }
            ]
        })
    }
    /*
        function(element){
            return <Noticia datos={element}  />
        }
        <button onclick="filtrarNoticias()">Filtrar Noticias</button>
    */
    render(){
       
        return(
            <div>
                <h1>{this.state.titulo}</h1>
                {this.state.noticias.map(element=><Noticia datos={element}  />)}
                <button onClick={this.filtrarNoticias}>Filtrar Noticias</button>
            </div>
        )
    }
}

export default Noticias