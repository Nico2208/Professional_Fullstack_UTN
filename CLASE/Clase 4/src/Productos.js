import React,{Component} from "react"
import Producto from './Producto'


/*
    listadoProducto=><Producto nombre={listadoProducto.nombre} precio={listadoProducto.precio} descripcion={listadoProducto.descripcion} />
    function(listadoProducto){
        return <Producto nombre={listadoProducto.nombre} precio={listadoProducto.precio} descripcion={listadoProducto.descripcion} />
    }

 */

class Productos extends Component{
    constructor(){
        super()
        this.state={
            listadoProductos:[
                {
                    nombre:"Moto G",
                    precio:"$1000",
                    descripcion:"Celular moto g"
                },
                {
                    nombre:"Moto X",
                    precio:"$1500",
                    descripcion:"Celular moto x"
                },
                {
                    nombre:"iPhone",
                    precio:"$2000",
                    descripcion:"Celular iPhone"
                }
            ],
            titulo:"Listado de productos en oferta"
        }
    }
    handleClick=()=>{
        this.setState({
            titulo:'Listado productos modificado'
        })
    }
    handleClickFiltrarProducto=()=>{
        this.setState({
            listadoProductos:[
                {
                    nombre:"Moto G",
                    precio:"$1000",
                    descripcion:"Celular moto g"
                }
            ]
        })
    }
    render(){
        
        return(
            <>
                
                <h1>{this.state.titulo}</h1>
                <button onClick={this.handleClick}>Cambiar Titulo</button>
                {/*<button onclick="handleClick()">Cambiar Titulo</button>*/}


                {this.state.listadoProductos.map(listadoProducto=><Producto nombre={listadoProducto.nombre} precio={listadoProducto.precio} descripcion={listadoProducto.descripcion} />)}
                
                
                <button onClick={this.handleClickFiltrarProducto}>Filtrar producto</button>                    
                
                
                <Producto nombre="iPhone 13" precio="$2000" descripcion="Celular">
                    <div>
                        <h1>Ejemplo children</h1>
                        Este es un ejemplo de child
                    </div>
                </Producto>
            </>
        )    
    }
}

export default Productos