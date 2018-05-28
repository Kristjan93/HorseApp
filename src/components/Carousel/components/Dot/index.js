import React from 'react';
import DotSvg from 'material-ui/svg-icons/av/fiber-manual-record';

const Dot = ({ index, isActive, onClick }) => {

  let handleClick = (event) => {
    onClick(event, index);
  };

  return (
    <DotSvg 
      onClick={handleClick}
      style={{ color: isActive ? 'rgb(0, 188, 212)' : 'white'}} 
    />
  );
}

export default Dot;