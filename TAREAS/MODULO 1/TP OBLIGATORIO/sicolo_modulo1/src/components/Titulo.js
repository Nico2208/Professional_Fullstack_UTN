import React, {Component} from "react";

import '../styles/head.css';

class Titulo extends Component {
    render () {
        return (
            <div>
                <header className="head">
                    <h2>{this.props.titulo}</h2>
                </header>
            </div>
        )
    }
}

export default Titulo;