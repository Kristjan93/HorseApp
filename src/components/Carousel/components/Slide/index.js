import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
`

const Slide = (props) => {
  return (
    <Div style={{ backgroundImage: `url(${props.imageUrl})` }}> </Div>
  );
}

export default Slide;