import React, { Component } from 'react';
import './App.css';
import Walkytalky from './Walkytalky';
import Timestamp from './Timestamp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Walkytalky />
        <Timestamp />
      </div>
    );
  }
}

export default App;
