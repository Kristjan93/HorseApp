import React from 'react';
import styled from 'styled-components';

import { Card, CardMedia } from 'material-ui/Card';

import { mediaBreakpoints } from '../../services/constants/breakpoints';
import { HOUR_1 } from '../../services/paths/images';

const Container = styled.div`
  max-width: 1400px;
  margin: 26px auto;
  padding-bottom: 26px;
`

const Section = styled.div`
  width: 100%;
  padding: 0 26px;
  ${mediaBreakpoints.min.tablet} {
    width: 50%;
  }
`

const ImageSection = styled.div`
  width: 100%;
  padding: 0 1rem;
  ${mediaBreakpoints.min.tablet} {
    width: 50%;
  }
`

const Contact = (props) => {
  return (
    <Container>
      <div style={{
        display: 'flex',
        margin: '0',
        padding: '0',
        flexWrap: 'wrap'
      }}>
        <ImageSection key={1}>
          <Card>
            <CardMedia>
              <img src={HOUR_1} alt=""/>
            </CardMedia>
          </Card>
        </ImageSection>

        <Section key={2}>
          <h1 style={{ marginTop: 0 }}>
            Contact information
          </h1>
          <p style={{ lineHeight: '1.5rem' }}>
            Booking and text... this can be done differently of better ?
          </p>
        </Section>
      </div>
    </Container>
  )
};

export default Contact;