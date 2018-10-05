import React, { Component } from 'react';
//import axios from 'axios'
//import Modal from 'react-modal' 
//import Carousel from 'react-carousel'
import { Route, Link, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'


class App extends Component {
  constructor () {
    super()

    this.state = {
      isLoggedIn:false
    }
  }
  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn}/>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
