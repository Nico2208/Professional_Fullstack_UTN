import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

function Public (){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/home' element={<Navigate to="/" />} />
            <Route path='/alta' element={<Registro />} />
            <Route path='/ingresar' element={<Login />} />
            <Route path='/producto/:id' element={<Detalle />} />
        </Routes>
    )
}

export default Public