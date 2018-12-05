import React from 'react';

const CoffeeList = (props) => {
  return (
    <div>
      <h2>coffee comes out here</h2>
      <ul className='coffee-list'>
        {props.items.map((item, index) => {
          return <li key={index}>CoffeeOrder # {index + 1} : {item.size} {item.coffee} {item.flavor} {item.strength} for {item.email}</li>
        })}
      </ul>
    </div>
  )
}

export default CoffeeList;