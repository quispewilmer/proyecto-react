import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            correo: "",
        }
        this.handleChange = this.handleChange.bind();
    }
    
    handleChange = (event) => {
        if(event.target.id == "nombres") {
            this.setState((nombre) => ({
                nombre: event.target.value
            }));
        } else if(event.target.id == "email") {
            this.setState((email) => ({
                correo: event.target.value
            }));
        }
        console.log(event.target.value);
    }

    handleSubmit = (event) => {
        const messageContainer = document.getElementById("message");
        event.preventDefault();
        messageContainer.textContent = `Hello, ${this.state.nombre} with email ${this.state.correo}`;
        console.log(event);
    }
    
    render() {
        return (
            <div>
                <form>
                    <fieldset>
                        <legend>Datos personales</legend>
                        <label htmlFor="nombres">Nombres</label>
                        <input type="text" id="nombres" value={this.state.nombre} onChange={this.handleChange}/>
                        <label htmlFor="email">Correo</label>
                        <input type="text" id="email" value={this.state.correo} onChange={this.handleChange}/>
                        <input type="submit" value="Enviar" onClick={this.handleSubmit}/>
                    </fieldset>
                </form>
                <p id="message"></p>
            </div>
        );
    }
}

export default Form