import React from 'react';
import { Link } from 'react-router-dom';

const OneAdventurer = (props) => {
  const allInventory = props.bagList;
  const adventurerName = props.match.params.name;
  const myBag = allInventory[adventurerName];
  return (
    <div>
      <h1>Whats in their bag?</h1>
      <h2>{adventurerName}</h2>
      <ul>
        {myBag.map(item => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  )
};

export default OneAdventurer;