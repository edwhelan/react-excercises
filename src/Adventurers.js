import React from 'react';
import { Link } from 'react-router-dom';

const Adventurers = (props) => {
  const adventurerList = props.adventurerList.map(name => {
    return (
      <li>
        <Link to={`/adventurers/${name}`}>{name}</Link>
      </li>
    )
  })
  return (
    <div>
      <h1>List of adventurers here</h1>
      <ul>
        {adventurerList}
      </ul>
    </div>
  )
}

export default Adventurers;