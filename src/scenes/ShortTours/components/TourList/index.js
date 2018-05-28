import React from 'react';
import styled from 'styled-components';

import TourItem from '../TourItem';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`

const TourList = ({ style, tours, ...rest }) => {
  return (
    <Div>
      {tours.map((item, index) => {
        return (
          <TourItem
            key={index}

            id={item.id}
            title={item.title}
            price={item.price}
            imageSrc={item.imageSrc}
            carouselImagesSrc={item.carouselImagesSrc}
            text={item.text}

            duration={item.duration}
            departures={item.departures} 
          />
        );
      })}
    </Div>
  );
}

export default TourList;
