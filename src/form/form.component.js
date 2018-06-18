import React, {Component} from 'react';

class FormComponent extends Component{

    
    render(){

        return(
            <form className="form-container">
                <h1>Nombre de mi form</h1>

                <button className="btn btn-primary">
                    Action
                </button>
            </form>
        )
    }

}

export default FormComponent;
