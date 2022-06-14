import axios from "../Config/axios";

export async function getAllProductos(item) {
    return axios.get("/sites/MLA/search?q="+item)
}

export async function getProductById (id) {
    return axios.get("/items/"+id)
}