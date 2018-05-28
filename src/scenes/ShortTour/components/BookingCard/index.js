import React from 'react';
import styled from 'styled-components'

import { Card, CardTitle, CardText } from 'material-ui/Card';

import Email from 'material-ui/svg-icons/communication/email';
import Phone from 'material-ui/svg-icons/communication/phone';

const P = styled.p`
  display: flex;
  align-items: center;
`;

const Price = styled.p`
  display: flex;
  align-items: center;
  
  border: 1px solid black;
  border-width: 1px 0 0 0;
  padding-top: 10px;
`;

const BookingCard = ({ price }) => {
  return (
    <Card>
      <CardTitle title={'Booking'} />

      <CardText style={{ fontSize: '1rem' }} >
          Book now by sending us an Email: 
          <P>
            <Email style={{ marginRight: '10px' }} />
            <a href="mailto:geysirhorses@gmail.com">geysirhorses@gmail.com</a>
          </P>

          Or give us a call:

          <P>
            <Phone style={{ marginRight: '10px' }} />
            +354 ...
          </P>
      </CardText>
    </Card>
  );
};

export default BookingCard;

