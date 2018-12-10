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

import Adventurers from './Adventurers';
import OneAdventurer from './OneAdventurer';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catList: [
        'Alice',
        'Edith',
        'Toby'
      ],
      adventurerList: {
        'Brom': ['axe', 'hammer', 'thieves tools', 'wooden pipe'],
        'Yggrdrasil': ['Elder leaf', 'Wand of Ages', 'Supple Bow'],
        'Gro\'luk': ['War-harness', 'flank of meat', 'face paint'],
        'Ser Darrington': ['Polished sword', 'Steel armour', 'Trusty steed'],
      }
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          {/* <Route path='/' component={Navbar} /> */}
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/cats' render={(props) => {
            return <Cats catList={this.state.catList}  {...props} />
          }} />
          <Route path='/cats/:catName' component={OneCat} />
          <Route path='/adventurers' render={(props) => {
            return <Adventurers adventurerList={Object.keys(this.state.adventurerList)} {...props} />
          }} />
          <Route path='/adventurers/:name' render={(props) => {
            return <OneAdventurer bagList={this.state.adventurerList} {...props} />
          }} />
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
