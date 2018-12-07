import React, { Component } from 'react';
import './App.css';
import CoffeeRunner from './CoffeeRunner'
import Walkytalky from './Walkytalky';
import Timestamp from './Timestamp';
import SearchBar from './SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timestamp />
        <SearchBar />
        {/* <CoffeeRunner /> */}
        <Walkytalky />
      </div>
    );
  }
}

export default App;
