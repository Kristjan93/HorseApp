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
        The Icelandic horse is our passion.  We are a small family company, We offers you to experience our friendly Icelandic horses.  We offer you a range of riding tours for beginners and more experienced rider short or long tours, depending on what suits you best.
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

const lorem = 'We at Geysir horses  offer you a short riding tours, Suitable for both first time rider and experienced.  This  tour is ideal for families and those how like to visit Iceland and ride our wonderful horses in amazing landscape.'