import React from 'react';
import { Link } from 'react-router-dom'

const Cats = (props) => {
  const catListItems = props.catList.map(catName => {
    return (
      <li>
        <Link to={`/cats/${catName}`}>{catName} </Link>
      </li>
    );
  })
  return (
    <div>
      <ul>
        {catListItems}
      </ul>
      <p>here thar be cats</p>
    </div>
  )
}

export default Cats;