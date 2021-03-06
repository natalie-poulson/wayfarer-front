import React, { Component } from 'react';
import axios from 'axios';
// import '.s/index.css';
import LoginModal from './LoginModal';

class LoginModalContainer extends Component {
  constructor () {
    super()
    this.state = {
      modalIsOpen: false,
      // input1: 'initial input1 string',
      // input2: 'initial input2 string',
      // input3: 'initial input3 string',

      username:'',
      password: '',
      currentCity: '',
      // isLoggedIn: false
    }
  }
  // this LoginModalCOntainer.js has a button to launch modal by set modalIsOpen state to true, LoginModal.js will listen to it
  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  }
  // LoginModal.js has a button to close modal by set modalIsOpen state to false, LoginModal.js will listen to it
  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  }
  // callback change states by multiple form inputs, 
  // target.name and [name] is build-in to match state name and form name attribute
  handleInput = (event) => {
    // let name = event.target.name;
    // let value  = event.target.value;
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  // not doing much now, should use to launch something or pass state some where else
  handleSignUp = (event) => {
    console.log('username: ',this.state.username);
    console.log('password: ',this.state.password);
    console.log('currentCity: ',this.state.currentCity);
    event.preventDefault();
      axios.post('http://localhost:3001/users/signup',
        {
          username: this.state.username,
          password: this.state.password,
          currentCity: this.state.currentCity
        } )
        .then(response => {
          console.log('SUCCESS')
          console.log(response)
          console.log('Rep.data.tok' + response.data.token)
          localStorage.token=response.data.token
          console.log('Local Storage' + localStorage.token)
          this.props.authfunc()
          // console.log('logged in:',this.state.isLoggedIn)
          // if (this.state.isLoggedIn == true){
          //   console.log(localStorage.token);
          // }
        })
        .catch(err => console.log(err))
  }

  handleLogIn = (event) => {
    event.preventDefault();
    console.log('username: ',this.state.username);
    console.log('password: ',this.state.password);
    axios.post('http://localhost:3001/users/login', 
    {
      username: this.state.username,
      password: this.state.password
    })
    .then(response => {
      // console.log(response.data.token)

      console.log('Rep.data.tok' + response.data.token)
      localStorage.token=response.data.token
      console.log('Local Storage' + localStorage.token)
      
      this.props.authfunc()
      // console.log('logged in:', this.state.isLoggedIn)
    })
    .catch(err => console.log(err, 'hello')) 
  }    

  render() {
    return (
      <div>
        <button id="signIn" onClick={this.handleOpenModal}>Sign Up</button>
        <button id="signIn"onClick={this.handleOpenModal}>Login</button>
        <LoginModal 
          modalIsOpen={this.state.modalIsOpen} 
          handleCloseModal={this.handleCloseModal}
          handleInput={this.handleInput}
          handleSignUp={this.handleSignUp}
          handleLogIn={this.handleLogIn}
        />
      </div>
    );
  }
}

export default LoginModalContainer;