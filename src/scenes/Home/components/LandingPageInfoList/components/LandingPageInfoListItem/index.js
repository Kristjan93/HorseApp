import React from 'react';
import styled from 'styled-components';
import Avatar from 'material-ui/Avatar';

const Div = styled.div`
  min-width: 250px;
  text-align: center;
  width: 100%;
  margin-bottom: 26px;

  @media (min-width: 750px) {
    width: 33.3333%;
    margin-bottom: 0;
  }
`

const P = styled.div`
  max-width: 300px;
  font-size: 1rem;
  line-height: 1.5rem;
  line-hight: 1.5rem;
  margin: 0 auto;
`

const LandingPageInfoListItem = ({ title, text, avatar }) => {
  return (
    <Div>
      <Avatar
        icon={avatar}
        size={150}
        backgroundColor={'#E91E63'}
      />
      
      <h2>{title}</h2>

      <P>{text}</P>
    </Div>
  );
};

export default LandingPageInfoListItem;