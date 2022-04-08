import React,{Component} from "react"

class Producto extends Component{
    /*constructor(props){
        super(props)
    }*/
    render(){
        console.log('props',this.props)
        return(
            <>
                <div>
                    <p>{this.props.nombre}</p>
                    <p>{this.props.precio}</p>
                    <p>{this.props.descripcion || ''}</p>
                    {this.props.children}
                    <button>Comprar</button>
                </div>
            </>
        )    
    }
}

export default Producto