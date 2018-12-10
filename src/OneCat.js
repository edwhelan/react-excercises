import React from 'react';

const OneCat = (props) => {
  return (
    <h2>
      {props.match.params.catName}
    </h2>
  )
}

export default OneCat;