import React, { Component } from 'react';
import CoffeeForm from './CoffeeForm';

class CoffeeRunner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='coffeeHaus'>
        <CoffeeForm />
      </div>
    )
  }
}

export default CoffeeRunner;