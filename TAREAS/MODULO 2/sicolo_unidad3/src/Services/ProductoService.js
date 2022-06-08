import axios from "../Config/axios"

export async function getAllProductos(filtrar){
    return axios.get("/sites/MLA/search?q="+filtrar) 
}
export async function getByIdProductos(id){
    return axios.get("/items/"+id) 
    //Llamo a items/+id porque es el sitio que contiene la informacion de un determinado producto
    //tengo que poner items porque asi esta determinado en la api de mercadolibre
    // Segun lo indicado en la api de ML
    // /items/:id
    // Retrieves the information of an item; to retrieve means recuperar
    
}

