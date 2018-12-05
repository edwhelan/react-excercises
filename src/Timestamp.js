import React, { Component } from 'react';

class Timestamp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
      items: []
    };
  }
  render() {
    return (
      <div>click to add to timer
        <form onSubmit={this._onSubmit}>
          <ul>
            {this.state.items.map((item) => {
              return <li>{item}</li>
            })}
          </ul>
          <button type='submit'>ADD TIME</button>
        </form>
      </div>
    )
  }

  _onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term = Date()]
    })
    console.log(Date())
  }

}

export default Timestamp;