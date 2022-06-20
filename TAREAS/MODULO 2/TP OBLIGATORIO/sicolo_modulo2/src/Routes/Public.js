import { Route, Routes, Navigate } from "react-router-dom";
import Detalle from "../Pages/Detalle";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ProductosAlta from "../Pages/ProductosAlta";
import ProductosModificar from "../Pages/ProductosModificar";
import Registro from "../Pages/Registro";




function Public () {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/home' element={<Navigate to="/" />} />
            <Route path='/register' element={<Registro/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/producto/:id" element={<Detalle/>}/>
            <Route path="/producto/alta" element={<ProductosAlta/>}/>
            <Route path="/producto/modificar/:id" element={<ProductosModificar/>}/>
        </Routes>

    )
}

export default Public