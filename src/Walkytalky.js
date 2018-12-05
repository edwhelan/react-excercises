import React, { Component } from 'react';

class Walktalky extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      translatedTerm: ''
    }
  }
  render() {
    return (
      <div>
        <h1>WALKY TALKY OVER!~</h1>
        <form>
          <input value={this.state.term} onChange={this._onChange} placeholder='whats your vector over~'></input>
        </form>
        <div>{this.state.translatedTerm}</div>
      </div>
    )
  }

  _onChange = event => {
    console.log(event);
    let normal = event.target.value;
    let translation = `brrrzt--- Over- ${event.target.value.toUpperCase()}`;


    this.setState({
      term: normal,
      translatedTerm: translation
    });
  };
}

export default Walktalky;