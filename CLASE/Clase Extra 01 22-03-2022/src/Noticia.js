import React,{Component} from "react"

class Noticia extends Component{
    render(){
        
        return(
            <div>
                <p>{this.props.datos.titulo}</p>
                <p>{this.props.datos.descripcion}</p>
            </div>
        )
    }
}

export default Noticia