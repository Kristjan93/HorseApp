import React from 'react';
import styled from 'styled-components';

import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

import { LinkTypes } from '../../../../services/linkTypes';

const Dd = styled.dd`
  margin: 0;
  padding: 0;
  border: 0;
`

const StyledFlatButton = styled(FlatButton)`
  user-select: auto;
`

const StyledFontIcon = styled(FontIcon)`
  margin-left: 0;
  color: #8d9aa5;
`

class DefinitionDescriptionLink extends React.Component {
  render() {
    let linkIconClass;
    switch (this.props.type) {
      case LinkTypes.EMAIL:
        linkIconClass = 'fa fa-envelope';
        break;

      case LinkTypes.PHONE:
        linkIconClass = 'fa fa-phone';
        break;

      case LinkTypes.LOCATION:
        linkIconClass = 'fa fa-map-marker';
        break;

      default:
        linkIconClass = '';
        break;
    }

    return (
      <Dd>
        <StyledFlatButton
          href={this.props.href}
          target="_blank"
          label={this.props.text}
          labelStyle={{ textTransform: 'none', color: '#8d9aa5' }}
          icon={<StyledFontIcon className={linkIconClass} />} 
        />
      </Dd>
    );
  }
}

export default DefinitionDescriptionLink;
