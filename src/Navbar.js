import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Cats from './Cats';


const Navbar = (props) => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/cats'>Cats </Link>
      </li>
    </ul>
  )
}

export default Navbar