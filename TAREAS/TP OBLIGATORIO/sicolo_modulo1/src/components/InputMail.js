import React, {Component} from "react";
import '../styles/inputs.css';

class InputMail extends Component{
    render() {
        return(
            <div className="form-group">
                <label for="mail">{this.props.nombre}</label>
                <input type="email" id="mail" name="mail" className="form-control" maxlength="50"/>
            </div>
        )
    }
}

export default InputMail;