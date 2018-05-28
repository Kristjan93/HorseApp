import React from 'react';
import styled from 'styled-components';

import { Card, CardMedia } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

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

const About = (props) => {
  return (
    <Container>
      <div style={{
        display: 'flex',
        margin: '0',
        padding: '0',
      }}>
        <ImageSection key={1}>
          <Card>
            <CardMedia>
              <img src={HOUR_1} alt="" />
            </CardMedia>
          </Card>
        </ImageSection>

        <Section key={2}>
            <h1 style={{ marginTop: 0 }} >
              About us
            </h1>
            <p style={{ lineHeight: '1.5rem' }} >
              We offer short riding tours, and we also have long tours taking you into the Icelandic highlands. Suitable for both first time rider and experienced.
            </p>
            <Divider />
          <h1 style={{ marginTop: 0 }} >
            Gústaf Loftsson
            </h1>
            <p style={{ lineHeight: '1.5rem' }} >
              Gústaf Loftsson was born and raised on a farm, in Geysir area. Horsemanship has always been his main interest and he has worked with horses from an early age, training, shoeing and Travelling around Iceland. He has also worked in Germany and Norway, traning Icelandic horses. Over the past 10 years he has worked in horse trips, riding in the Icelandic highland with travelers.  Jónína Lóa Kristjánsdóttir is a nurse, yoga teacher and student in a family therapy University of Iceland. Jónína is very interested in working with people and also nature-based tourism. Horsemanship has always been part of her life an the past 5 years she has worked in horse trips, riding in the Icelandic highland with travelers.
            </p>
        </Section>
      </div>
    </Container>
  )
}

let text = 'We welcome you to our farm Myrkholt, located in in the southwest part of Iceland, about 1 hour drive from Reykjavík. Our farm is well located between Gullfoss and Geysir two of Icelandic´s most beautiful natural wonders. Geysir horses is a small family run business. Our horses are a part of the family and we put a great effort into ensuring they are both happy and healthy.';

export default About;