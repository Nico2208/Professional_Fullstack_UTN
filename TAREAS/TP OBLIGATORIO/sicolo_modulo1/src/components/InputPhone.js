import React, {Component} from "react";
import '../styles/inputs.css';

class InputPhone extends Component {
    render() {
        return (
            <div className="form-group">
                <label for="phone">{this.props.nombre}</label>
                <input type="number" id="phone" name="phone" className="form-control" maxlength="50"/>
            </div>
        )
    }
}

export default InputPhone;