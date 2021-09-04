import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row row1">
          <nav>
            <ul>
              <li><a href="/#">Home</a></li>
              <li><a href="/?experiments">Experiments</a></li>
            </ul>
          </nav>
        </div>
        <div className="row row2"></div>
        <div className="row row3">
          <div id="footer">
            <span>@copyright 2021</span>
          </div>
        </div>
      </div>
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <p className="yeah">yeah!</p>
      // </div>
    );
  }
}

export default App;
