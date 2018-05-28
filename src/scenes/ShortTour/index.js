import React from 'react';
import styled from 'styled-components';

import { mediaBreakpoints } from '../../services/constants/breakpoints';

import { toursAPI } from '../../services/session/toursAPI';

import BookingCard from './components/BookingCard';
import PointInfoCard from './components/PointInfoCard';
import GoodToKnowInfo from './components/GoodToKnowInfo';

import NotFound from '../NotFound';

const TourMainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 1rem;
  display: initial;
  width: 100%;

  ${mediaBreakpoints.min.tablet} {
    width: 50%;
  }
`

const Tour = ({ match, ...rest }) => {
  const tour = toursAPI.getById(match.params.id);

  if( !tour ) return <NotFound />

  let { primaryText, title, info ,text, price } = tour;

  return (
    <div style={{ width: '100%' }}>
      <div style={{ width: '100%', height: '50vh' }}>
        <div style={{
          backgroundImage: 'url(/images/lala.jpg)',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
        }}>
        </div>
      </div>

      <div style={{width: '100%', textAlign: 'center' }}>
        
        <h1 style={{ marginBottom: '4px' }}>
          {title}
        </h1>

        <p style={{
          lineHeight: '30px',
          fontSize: '18px',
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'left',
          padding: '0 1rem',
        }}>
          {primaryText}
        </p>
      </div>

      <div style={{ maxWidth: '1400px', margin: '26px auto' }}>
        <TourMainContent>
          <ItemContainer key={1}>
            <PointInfoCard info={info} />
          </ItemContainer>
          
          <ItemContainer key={2}>
            <BookingCard price={price} />
          </ItemContainer>
        </TourMainContent>

        <GoodToKnowInfo />
      </div>
    </div>
  );
}

export default Tour;