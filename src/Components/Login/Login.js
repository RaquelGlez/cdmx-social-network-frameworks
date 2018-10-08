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
            password: '',
            nameRegister: '',
            emailRegister: '',
            passwordRegister: ''
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
        // const email = this.state.emailRegister;
        // const password = this.state.passwordRegister;
        credentials.auth().createUserWithEmailAndPassword(this.state.emailRegister, this.state.passwordRegister).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
              alert('The password is too weak.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
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
                        <Button data-toggle="modal" data-target="#exampleModal" style={{marginLeft: '25px'}} className="btn btn-success">Registrate</Button>
                        {/* <Button onClick={this.signup} className="btn btn-success">Registrate</Button> */}
                    </section>      
                </div>

                <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Registro de nuevo usuario</h5>
                                <Button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </Button>
                        </div>
                        <div className="modal-body">
                            <section className="form-group">
                                <Label className="form-label" for="name">Nombre</Label>
                                <Input value={this.state.nameRegister} onChange={this.handleChange} type="name" id="name" className="form-control form-input" placeholder="Ingresa tu Nombre"/>
                            </section>
                            <section className="form-group">
                                <Label className="form-label" for="email">Correo electrónico</Label>
                                <Input onChange={this.handleChange} value={this.state.emailRegister} type="email" className="form-control form-input" id="email_register" placeholder="usuario@example.com"/>
                            </section>
                            <section className="form-group">
                                <Label className="form-label" for="password" >Contraseña</Label>
                                <Input value={this.state.passwordRegister} onChange={this.handleChange} type="password" className="form-control form-input" id="password_register" />
                            </section>
                        </div>
                        <div className="modal-footer">
                            <Button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</Button>
                            <Button onClick={this.signup} id="register" type="button" style={{marginLeft: '25px'}} className="btn btn-success">Registrarse</Button>
                        </div>
                    </div>
                </div>
                </div>   
                
            </main>
            
        );
    }
}


export default Login;
