import React,{Component} from "react"
import Productos from './Productos'

class Home extends Component{
    render(){
        return(
            <div>
                <div>
                    Home React
                    <p>Nombre: moto g</p>
                    <p>Precio: 200</p>
                </div>
                <div>
                    <h1>Listado de productos</h1>
                    <Productos />
                </div>
            </div>
        )    
    }
}

export default Home