// Dependencias
import React, { Component} from 'react';
import credentials from '../../configuration/Firebase'
import LoginRed from './LoginRed';
import {Button, FormGroup, Label, Input} from 'reactstrap';

// Assets
import './Login.css';
import logo from '../../images/mi-sazon.png'

class Login extends Component {
    constructor (props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }


    login(e) {
        e.preventDefault();
        credentials.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function() {
        }).catch((error)=>{
        // Mensaje en consola si existe error de inicio de sesion
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    }

    signup(e) {
        e.preventDefault();
        credentials.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(function() {
        }).catch((error)=>{
        // Mensaje en consola si existe error de inicio de sesion
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    }

        handleChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }


    render() {
        return (
            <main className="container">
                <div className="contenedor">
                    <section className="col-sm">
                        <img className="form-logo" src={logo} alt="Mi-Sazón"></img>
                    </section>
                    <section className="row"> <LoginRed /></section>
                    <section className="">
                        <FormGroup>
                            <Label for="exampleEmail">Correo electrónico</Label>
                            <Input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleEmail" className="form-control form-input" placeholder="usuario@example.com" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Contraseña</Label>
                            <Input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="examplePassword" />
                        </FormGroup>
                    </section>
                    <section className="btn btn-warning btn-block form-button mb-3">
                        <Button type="submit" onClick={this.login} className="btn-warning ">Iniciar sesión</Button>
                    </section>
                    <section className="btn btn-success btn-block form-button mb-3">
                        <Button onClick={this.signup} className="btn btn-success">Registrate</Button>
                    </section> 
                        
                </div>
                
            </main>
            
        );
    }
}


export default Login;
