import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const Ul = styled.ul`
  list-style: none;
`

const Down = () => {
  return (
    <Div>
      <Ul>
        <li>
          <p>Thanks for visiting geysirhorses.is.</p>
        </li>
        <li>
          <p>Website is down do to maintenance.</p>
        </li>
        <li>
          <p>Sorry for the inconvenience.</p>
        </li>
      </Ul>
    </Div>
  );
};

export default Down;