import React, { useEffect, useState } from "react";
import Productos from "./Productos";

function Producto () {
    
    const [ listaProductos, setListaProductos ] = useState ([]);

    

    useEffect( //Uso el hook de efectos como el metodo componentDidMount: consulta a la bd.
        ()=>{
            const request = async () => {
                const data = await getAllProductos
            }

            request()
        },
        []
    )
    
    


    return (
        <div>
            {listaProductos.map ( elemento =>
                <div>
                    <Productos nombre={elemento.nombre} descripcion={elemento.descripcion} sku={elemento.sku} cantDisponible={elemento.cantDisponible}/>
                    {/* Para cada elemento del array de listaProductos lo utilizo en el componente hijo Productos */}
                </div>
            )}
        </div>
    );
}

export default Producto;