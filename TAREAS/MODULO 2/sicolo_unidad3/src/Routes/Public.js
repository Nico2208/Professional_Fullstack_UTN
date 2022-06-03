import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Registro from "../Pages/Registro";
import Login from "../Pages/Login";
import Detalle from "../Pages/Detalle";

function Public (){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/home' element={<Navigate to="/" />} />
            <Route path='/register' element={<Registro />} />
            <Route path='/login' element={<Login />} />
            <Route path='/producto/:id' element={<Detalle />} />
        </Routes>
    )
}

export default Public