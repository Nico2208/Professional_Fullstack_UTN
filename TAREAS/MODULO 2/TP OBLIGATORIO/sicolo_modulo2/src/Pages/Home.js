import Productos from "../Components/Productos";
import firebase from "../Config/firebase"

function Home () {
    console.log("firebase: ", firebase)
    return (
        <div>
            <h1>Bienvenido</h1>
            <Productos/>
        </div>
    )
}

export default Home