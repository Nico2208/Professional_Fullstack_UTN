import {Link} from "react-router-dom";

function Menu () {

    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/register">Registro</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </>
    )
}

export default Menu