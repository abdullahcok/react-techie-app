import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Youtube from './Youtube';

class App extends Component {
  render() {
    return (
          <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>TechVid</h1>
                    <p>
                    </p>
                    <a className="App-link"
                          href="https://reactjs.org"
                          target="_blank"
                          rel="noopener noreferrer">
                    </a>
                </header>
                <section>
                    <Youtube />
                </section>
          </div>
    );
  }
}

export default App;
