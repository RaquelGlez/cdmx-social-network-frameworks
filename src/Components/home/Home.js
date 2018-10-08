import React, { Component} from 'react';
import Navbar from './Navbar'
import Publication from './Publication'


import './Home.css';

class Home extends Component {
    constructor (props) {
        super(props);
        
    }

  

    render() {
        return (
            <div className="col">
                <div> <Navbar user={this.props.user}/></div>
                <h1>Entrada de publicaciones</h1>
                <p>hola {this.props.user.name}</p>
                <div className="publicationsContainer">   </div>
            </div>    
        )
    }
}


export default Home;