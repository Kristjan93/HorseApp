import React from 'react';
import styled from 'styled-components';

import Divider from 'material-ui/Divider';

import { mediaBreakpoints } from '../../../../services/constants/breakpoints';

const Container = styled.div`
  max-width: 1400px;
  margin: 26px auto;
  padding: 26px 26px;
`

const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const TextSection = styled.div`
  width: 100%;
  padding: 0px 0;
  ${mediaBreakpoints.min.tablet} {
      width: 50%;
  }
`

const Title = styled.h2`
  font-weight: 600;
  margin-bottom: 15px;
  max-width: 650px;
`

const GoodToKnowInfo = (props) => {
  return (
    <Container>

      <Divider />

      <TextContainer key={1}>
        <TextSection>
          <Title>
            Good to know
          </Title>
          <p>
            Some text...
          </p>
        </TextSection>

        <TextSection key={2}>
          <Title >
            Something else
          </Title>
          <p>
            Some text...
          </p>
        </TextSection>
      </TextContainer>
    </Container>
  );
};

export default GoodToKnowInfo;