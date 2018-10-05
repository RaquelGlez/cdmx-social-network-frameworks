import React, { Component } from 'react';
import credentials from './configuration/Firebase.js'
import Login from './Components/Login/Login';
import Home from './Components/home/Home';

import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
        user:{},
    }
    this.authListener = this.authListener.bind(this)
  }

  componentDidMount(){
    this.authListener();
  }

  authListener () {
    credentials.auth().onAuthStateChanged((user) => {
        // console.log(user);
      if (user) {
        console.log('existe usuario activo');
        // User is signed in.
        this.setState({ user });
      } else {
        console.log('no existe usuario activo');
      // User is signed out.
      this.setState({ user:null });
      }
    });
  };
  
  
  render() {
    return (
      <div className="App">
        <div>
          {this.state.user ? (<Home />) : (<Login/>)}
        </div>
      </div>
    );
  }
}

export default App;
