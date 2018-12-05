import React, { Component } from 'react';
import CoffeeList from './CoffeeList';

class CoffeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffee: '',
      email: '',
      size: '',
      flavour: '',
      strength: '',
      list: []
    };
  }

  render() {
    return (
      <div>
        <h1>coffee goes here</h1>
        <form onSubmit={this._onSubmit}>
          <label>
            Coffee: <input value={this.state.coffee} onChange={this._onChangeCoffee} type='text' name='coffee' placeholder='Ex. Black' required></input>
          </label>
          <br />
          <label>
            Email: <input value={this.state.email} onChange={this._onChangeEmail} type='email' name='email' placeholder='Ex. bob@aol.com' required></input>
          </label>
          <br />
          <label>
            Size: <input value={this.state.size} onChange={this._onChangeSize} type='text' name='size' placeholder='Ex. SM/MED/LARGE' required></input>
          </label>
          <br />
          <label>
            Flavour: <input value={this.state.flavour} onChange={this._onChangeFlavour} type='text' name='flavour' placeholder='Ex. Chocolate' required></input>
          </label>
          <br />
          <label>
            Strength: <input value={this.state.strength} onChange={this._onChangeStrength} type='text' name='strength' placeholder='Ex. Jet-fuel' required></input>
          </label>
          <br />
          <input type='submit' />
        </form>

        <CoffeeList items={this.state.list} />
      </div >
    )
  }
  _onChangeCoffee = (event) => {
    console.log(event)
    this.setState({
      coffee: event.target.value
    })
  }
  _onChangeEmail = (event) => {
    console.log(event)
    this.setState({
      email: event.target.value
    })
  }
  _onChangeSize = (event) => {
    console.log(event)
    this.setState({
      size: event.target.value
    })
  }
  _onChangeFlavour = (event) => {
    console.log(event)
    this.setState({
      flavour: event.target.value
    })
  }
  _onChangeStrength = (event) => {
    console.log(event)
    this.setState({
      strength: event.target.value
    })
  }
  _onSubmit = (event) => {
    event.preventDefault()
    let newItem = {
      coffee: this.state.coffee,
      email: this.state.email,
      flavour: this.state.flavour,
      size: this.state.size,
      strength: this.state.strength
    }
    this.setState({
      list: [...this.state.list, newItem],
      coffee: '',
      email: '',
      flavour: '',
      size: '',
      strength: ''
    })
  }

}

export default CoffeeForm;