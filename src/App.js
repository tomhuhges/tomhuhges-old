import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Art from './components/Art/Art';
import Code from './components/Code/Code';
import Experiments from './components/Experiments/Experiments';
import LinkDump from './components/LinkDump/LinkDump';
import Test from './components/Test/Test';
import Post from './components/Post/Post';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/code" component={Code} />
          <Route path="/experiments" component={Experiments} />
          <Route path="/art" component={Art} />
          <Route path="/linkdump" component={LinkDump} />
          <Route path="/test" component={Test} />
          <Route path="/:slug" component={Post} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
