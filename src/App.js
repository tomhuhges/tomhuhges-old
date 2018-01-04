import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Test from './components/test';
import logo from './svg/under-construction.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={() => {
            return (
              <div>
                <img className="under-construction" src={logo} alt="under construction" />
              </div>
            )
          }}>
          </Route>
          <Route path="/test" component={Test} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
