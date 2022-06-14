import Productos from "../Components/Productos";
import firebase from "firebase/compat";

function Home () {
    console.log("firebase: ", firebase)
    return (
        <div>
            <h1>Bienvenidos</h1>
            <Productos/>
        </div>
    )
}

export default Home