import React, {Component} from "react";
import '../styles/inputs.css';

class InputPass extends Component {
    render(){
        return (
            <div className="form-group">
                <label for="password">{this.props.nombre}</label>
                <input type="password" id="password" name="password" className="form-control" maxlength="50"/>
            </div>
        )
    }
}

export default InputPass;