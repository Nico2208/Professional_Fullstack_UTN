import React, {Component} from "react";
import '../styles/inputs.css';

class InputText extends Component {
    render() {
        return (
            <div className="form-group">
                    <label for="name">{this.props.nombre}</label>
                    <input type="text" id="name" name="name" className="form-control" maxlength="50"/>
            </div>
        )
    }
}

export default InputText;