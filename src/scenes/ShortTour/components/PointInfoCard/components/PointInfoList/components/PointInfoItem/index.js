import React from 'react';
import styled from 'styled-components';

import { ListItem } from 'material-ui/List';
import InsertEmoticon from 'material-ui/svg-icons/editor/insert-emoticon';
import Flag from 'material-ui/svg-icons/content/flag';
import Clock from 'material-ui/svg-icons/device/access-time';
import People from 'material-ui/svg-icons/social/people';
import Info from 'material-ui/svg-icons/action/info';
import Person from 'material-ui/svg-icons/social/person';
import Price from 'material-ui/svg-icons/content/remove';

const PointInfoText = styled.p`
  overflow: auto !important;
  white-space: normal !important;
  overflow: auto !important;
  height: auto !important;
`

const PointInfoItem = ({ type ,title, text, nestedText }) => {
  let leftIcon = ''
  switch (type) {
    case 'duration':
      leftIcon = <Clock />;
      break;
    case 'departures':
      leftIcon = <Flag />;
      break;
    case 'groupSize':
      leftIcon = <People />;
      break;
    case 'included':
      leftIcon = <Info />;
      break;
    case 'ridingSkills':
      leftIcon = <Person />;
      break;
    case 'price':
      leftIcon = <Price />;
      break;
    default:
    leftIcon = <InsertEmoticon />;
      break;
  };

  return (
    <ListItem 
      leftIcon={leftIcon}
      primaryText={title}

      secondaryText={
        <PointInfoText> 
          {text}
        </PointInfoText>
      }

      disabled={!nestedText}
      primaryTogglesNestedList={true}
      nestedItems={!nestedText ? []: [
        <ListItem key={1}
          primaryText={nestedText}
        />
      ]}
    />
  );
};

export default PointInfoItem;