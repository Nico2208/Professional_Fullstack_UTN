import axios from "../Config/axios"

export async function getAllProductos(filtrar){
    return axios.get("/sites/MLA/search?q="+filtrar) 
}
export async function getByIdProductos(id){
    return axios.get("/items/"+id) 
}

