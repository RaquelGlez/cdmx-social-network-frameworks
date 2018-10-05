// Dependencias
import React, { Component} from 'react';
import firebase from 'firebase';
import credentials from '../../configuration/Firebase';


// Assets
import './Login.css';
import {Button} from 'reactstrap';

class LoginRed extends Component {
  constructor () {
    super();
    this.state = {
      user: null
    }; 

    this.handleAuth = this.handleAuth.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
    this.loginUsuario = this.loginUsuario.bind(this);
  }

  // componentWillMount () {
  //   credentials.auth().onAuthStateChanged(user => {
  //     this.setState({ user })
  //   })
  // }



  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }


  // handleLogout () {
  //   firebase.auth().signOut()
  //   .then(result => console.log(`${result.user.email} ha salido`))
  //   .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  // }




  //loginUsuario es un metodo
loginUsuario () {
  // si el usuario esta logueado
  if (this.state.user){
    return (
      <div>
        
       {/* <img width="100" src={this.state.user.photoURL} alt={this.state.user.displayName}></img>
        <p>Hola {this.state.user.displayName}!</p>
         <Button onClick={this.handleLogout}>Salir</Button> */}
      </div>
    )
  } else {
  // Si no lo esta
    return(
      <div className="btn btn-danger btn-block form-button mb-3">
        <Button color="danger" onClick={this.handleAuth}>Iniciar con Google</Button>
      </div>
    
    );
  }
}

render() {
    return (
      <div className="container">
        <section className="login-google">{ this.loginUsuario() }</section>
      </div>
    );
  }
}


export default LoginRed;