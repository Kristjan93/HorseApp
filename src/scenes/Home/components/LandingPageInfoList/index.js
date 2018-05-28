import React from 'react';
import styled from 'styled-components';

import Book from 'material-ui/svg-icons/action/book';
import SmileFace from 'material-ui/svg-icons/editor/insert-emoticon';
import Info from 'material-ui/svg-icons/action/info';

import LandingPageInfoListItem from './components/LandingPageInfoListItem';

const Div = styled.div`
  margin: 26px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const LandingPageInfoList = (props) => {
  return (
    <Div>
      <LandingPageInfoListItem
        title={'Booking'}
        text={text}
        avatar={<Book />}
      />

      <LandingPageInfoListItem
        title={'Service'}
        text={text}
        avatar={<SmileFace />}
      />
      
      <LandingPageInfoListItem
        title={'The icelandic horse'}
        text={text}
        avatar={<Info />}
      />
    </Div>
  );
};

export default LandingPageInfoList;

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";