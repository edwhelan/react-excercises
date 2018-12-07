import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  render() {
    return (
      <div>
        <h2>SEARCH BELOW OR SOMETHING</h2>
        <form>
          <label>
            <input className='search-bar' value={this.state.term} onChange={this._onChange} placeholder='Search for your hearts desires~' ></input>
          </label>
        </form>
      </div>
    )
  }
}

export default SearchBar;