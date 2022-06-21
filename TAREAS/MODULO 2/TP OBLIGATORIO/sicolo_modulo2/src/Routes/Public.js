import { Route, Routes, Navigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import Detalle from "../Pages/Detalle";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ProductosAlta from "../Pages/ProductosAlta";
import ProductosModificar from "../Pages/ProductosModificar";
import Registro from "../Pages/Registro";




function Public (props) {
    return (
        <AuthContext.Consumer>
            {context => 
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path='/home' element={<Navigate to="/" />} />
                    {
                        !context.userLogin &&
                        <>
                            <Route path='/register' element={<Registro/>}/>
                            <Route path="/login" element={<Login setLogin={props.setLogin}/>} />
                        </> 
                    }
                    
                    <Route path="/producto/:id" element={<Detalle/>}/>
                    <Route path="/producto/alta" element={<ProductosAlta/>}/>
                    {
                        context.userLogin && 
                        <Route path="/producto/modificar/:id" element={<ProductosModificar/>}/>
                    }
                    
                </Routes>    
            }
        </AuthContext.Consumer>
    )
}

export default Public