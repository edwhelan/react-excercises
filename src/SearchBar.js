import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      cities: [],
      matchedCities: [],
    };
  }

  componentDidMount() {
    // get the data from the api => parse to json => set state of cities which is master array to be used.
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    fetch(endpoint)
      .then(r => r.json())
      .then(r => {
        let returnedCities = r
        this.setState({
          cities: [...returnedCities]
        })
      })
  }

  render() {
    return (
      <div>
        <h2>SEARCH BELOW OR SOMETHING CITY/STATE</h2>
        <form>
          <label>
            <input className='search-bar' value={this.state.term} onChange={this._onChange} placeholder='Search for your hearts desires~' ></input>
          </label>
        </form>
        <ul className='output-box'>{this._makeList(this.state.matchedCities)}</ul>
      </div>
    )
  }
  //draw <li> elements to the page maps a passed in array to be sorted
  _makeList(arg) {
    return arg.map((result, index) => {
      return (<li key={index}>{result.city}, {result.state} : pop. {result.population}</li>)
    })
  }

  //function to find if a passed in arg matches. Uses RegExp to flatten
  // returns either the city or the state
  _findMatches(toMatch) {
    return this.state.cities.filter(place => {
      const regex = new RegExp(toMatch, 'gi');
      return place.city.match(regex) || place.state.match(regex)
    })
  }
  //on change event handler
  _onChange = (event) => {
    let normal = event.target.value;
    let returnedSearch = this._findMatches(normal)
    this.setState({
      term: normal,
      matchedCities: returnedSearch
    });
  }
}

export default SearchBar;