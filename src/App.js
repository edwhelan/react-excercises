import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Navbar from './Navbar';
import CoffeeRunner from './CoffeeRunner'
import Walkytalky from './Walkytalky';
import Timestamp from './Timestamp';
import SearchBar from './SearchBar';
import Home from './Home';
import About from './About';
import Cats from './Cats';
import OneCat from './OneCat'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          {/* <Route path='/' component={Navbar} /> */}
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/cats' component={Cats} />
          <Route path='/cats/:catName' component={OneCat} />
          <Timestamp />
          <SearchBar />
          {/* <CoffeeRunner /> */}
          <Walkytalky />
        </div>
      </Router>

    );
  }
}

export default App;
