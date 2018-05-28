import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


import RaisedButton from 'material-ui/RaisedButton';
import Flag from 'material-ui/svg-icons/content/flag';
import Clock from 'material-ui/svg-icons/device/access-time';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';


const Div = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  @media(min-width: 700px) {
    width: 50%;
  }
`;

const TourItem = ({ 
  id, title, price, imageSrc ,imageWidth ,text, duration, departures }) => {
  return (
    <Div>
      <Card>
        <NavLink to={`/short-tours/${id}`}>
          <CardMedia
            overlayContentStyle={{ background: 'none', bottom: 'inherit' }}
            overlay={
                <CardTitle
                  titleStyle={{
                    fontSize: '30px',
                    display: 'inline',
                    textShadow: 'black 0.1em 0.1em 0.7em',
                    padding: '5px',
                  }}
              title={title} />
            }
          >
            <img src={imageSrc} alt="People riding with the landscape in out the area in the background"/>
          </CardMedia>
        </NavLink>

        <CardTitle 
          title={`ISK ${price}`}
          subtitle={
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              <span>
                <Clock />
                <span>Duration: {duration}.</span>
              </span>

              <span>
                <Flag />
                <span>Departures: {departures}.</span>
              </span>
            </span>
          }
        />

        <CardText style={{ minHeight:'70px', fontSize: '1rem' }} >
          {text}
        </CardText>

        <CardActions>
          <RaisedButton
            containerElement={<NavLink to={`/short-tours/${id}`}/>}
            label="Read more"
            fullWidth={true}
            primary={true} />
        </CardActions>
      </Card>
    </Div>
  );
}

export default TourItem; 