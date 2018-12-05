import React, { Component } from 'react';
import './App.css';
import CoffeeRunner from './CoffeeRunner'
import Walkytalky from './Walkytalky';
import Timestamp from './Timestamp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CoffeeRunner />
        <Walkytalky />
        <Timestamp />
      </div>
    );
  }
}

export default App;
