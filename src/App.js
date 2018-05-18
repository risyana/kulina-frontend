import React, { Component } from 'react';
import logo from './images/kulina-logo-white.svg';
import './style/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Welcome to React</h2>
          <img src={logo} />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
