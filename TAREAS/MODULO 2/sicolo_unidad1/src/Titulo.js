import React, { useState } from "react";

function Titulo (props) {

    const [titulo, setTitulo] = useState ('PRODUCTOS')

    return (
        <div>{titulo}</div>
    );
}

export default Titulo;