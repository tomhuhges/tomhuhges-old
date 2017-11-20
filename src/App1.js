import React, { Component } from 'react';
import logo from './svg/under-construction.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="under-construction" src={logo} alt="under construction" />
        <p />
      </div>
    );
  }
}

export default App;
