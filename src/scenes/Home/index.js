import React from 'react';
import styled from 'styled-components';

import GoogleMap from '../../components/GoogleMap';
import IntroTextBlock from './components/IntroTextBlock';
import LandingPageInfoList from './components/LandingPageInfoList';
import Carousel from '../../components/Carousel';

const Div = styled.div`
  width: 100%;
`

const MapContainer = styled.div`
  margin: 26px 0;
  height: 500px;
`

const Home = (props) => {
  return (
    <Div>
      <Carousel />

       <IntroTextBlock />

      {/* <LandingPageInfoList /> */}

      <MapContainer className='my-google-map'>
        <GoogleMap />
      </MapContainer>
    </Div>
  );
}

export default Home;
