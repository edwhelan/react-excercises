import React, { Component } from 'react';

class Timestamp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    };
  }
  render() {
    return (
      <div className='App'><h1>click to add to timer</h1>
        <form onSubmit={this._onSubmit}>
          <button type='submit'>ADD TIME</button>
          <ul>
            {this.state.items.map((item) => {
              return <li>{item}</li>
            })}
          </ul>
        </form>
      </div>
    )
  }

  _onSubmit = (event) => {
    let newDate = Date();
    event.preventDefault();
    this.setState({
      items: [...this.state.items, newDate]
    })
    console.log(Date())
  }

}

export default Timestamp;