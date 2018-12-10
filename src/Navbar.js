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
        <ul>
          <li><Link to='/cats/1cat'>1</Link></li>
          <li><Link to='/cats/2cat'>2</Link></li>
          <li><Link to='/cats/3cat'>3</Link></li>
        </ul>
      </li>
    </ul>
  )
}

export default Navbar