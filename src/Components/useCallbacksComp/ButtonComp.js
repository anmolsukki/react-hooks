import React from 'react';

const ButtonComp = ({ handleClick, children }) => {
    console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

export default React.memo(ButtonComp);
