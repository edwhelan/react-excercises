import React, { Component } from 'react';

class Timestamp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      liveTime: new Date().toLocaleString(),
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ liveTime: new Date().toLocaleString() }), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className='App'><h1>click to add to timer</h1>
        <form onSubmit={this._onSubmit}>
          <div>{this.state.liveTime}</div>
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
    let newDate = new Date().toLocaleString();
    event.preventDefault();
    this.setState({
      items: [...this.state.items, newDate]
    })
  }

}

export default Timestamp;