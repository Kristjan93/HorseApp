import React from 'react';
import styled from 'styled-components';

import { toursAPI } from '../../services/session/toursAPI';

import TourList from './components/TourList';

const Div = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`

const ShortTours = ({ ...rest }) => {
  const tours = toursAPI.get();

  return (
    <Div>
      <TourList tours={tours} />
    </Div>
  );
}

export default ShortTours;