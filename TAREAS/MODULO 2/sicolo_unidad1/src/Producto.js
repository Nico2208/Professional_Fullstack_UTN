import React, { useEffect, useState } from "react";
import Productos from "./Productos";

function Producto () {
    
    const [ listaProductos, setListaProductos ] = useState ([]);

    

    useEffect( 
        ()=>{
            setTimeout(()=>{
                setListaProductos([
                    {
                        nombre:"Celular Motorola Edge 20 Pro 256gb + Control Ready For Air",
                        descripcion:"Con el innovador lente periscópico para telefotografía, podés sacar fotos a la distancia sin perder nitidez. Además, podés registrar detalles a gran distancia con el Super Zoom de 50x. La estabilización óptica de imagen (OIS) en el zoom compensa automáticamente las fotos y los videos poco nítidos a causa de los movimientos involuntarios de la cámara.",
                        sku: "XYZ-BLN-41",
                        cantDisponible: 32
                    },
                    {
                        nombre:"Apple iPhone 13 Pro (128 GB) - Oro",
                        descripcion:"iPhone 13 Pro. El mayor avance en el sistema de cámaras Pro de Apple hasta ahora. Pantalla Super Retina XDR con ProMotion que brinda una respuesta más rápida y fluida. Chip A15 Bionic para un rendimiento fuera de serie. Diseño resistente y un gran salto en duración de batería.",
                        sku: "XYZ-BLN-23",
                        cantDisponible: 12
                    }
                ])
            },2000)
        },
        []
    )
    
    


    return (
        <div>
            {listaProductos.map ( elemento =>
                <div>
                    <Productos nombre={elemento.nombre} descripcion={elemento.descripcion} sku={elemento.sku} cantDisponible={elemento.cantDisponible}/>
                    
                </div>
            )}
        </div>
    );
}

export default Producto;