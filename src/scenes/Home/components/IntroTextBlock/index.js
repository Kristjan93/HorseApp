import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import RaisedButton from 'material-ui/RaisedButton';

var StyledRoot = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

var StyledContainer = styled.div`
  max-width: 680px;
`

var H1 = styled.h1`
  margin: 26px 0;
`

var P = styled.p`
  line-height: 2.5rem;
  font-size: 26px;
  margin: 0;
`

const IntroTextBlock = (props) => {
  return (
    <StyledRoot>
      <StyledContainer>
        <H1>
          Geysir Horses
        </H1>
        <P>
          We are a small family company with a passion for the Icelandic horse.  
          We offer a range of riding tours for beginners and more experienced riders 
          in a magnificent landscape.
        </P>

        <RaisedButton
            style={{ margin: '26px 0', minWidth: '160px' }}
            buttonStyle={{ height: '46px', lineHeight: '46px' }}
            overlayStyle={{ height: '46px' }}
            label="Our Tours"
            primary={true}
            containerElement={<NavLink to='/tours' style={{ textDecoration: 'none' }} />} 
        />
      </StyledContainer>
    </StyledRoot>
  );
};

export default IntroTextBlock;