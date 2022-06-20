import axios from "../Config/axios";
import firebase from "../Config/firebase";

export async function getAllProductos(item) {
    // return axios.get("/sites/MLA/search?q="+item)
    const querySnapshot = await firebase.db.collection("productos")
        .get()
    return querySnapshot.docs
}

export async function getProductById (id) {
    // return axios.get("/items/"+id)
    return await firebase.db.doc("productos/"+id).get()
}