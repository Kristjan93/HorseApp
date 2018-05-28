import React from 'react';
import styled from 'styled-components';

import { LinkTypes } from '../../services/linkTypes';

import DefinitionDescriptionLink from './components/DefinitionDescriptionLink';
import DefinitionDescriptionBrand from './components/DefinitionDescriptionBrand';

const Dl = styled.dl`
  width: 220px;
`
const Dt = styled.dt`
  color: #8d9aa5;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 38px;
`

class FooterDefinitionList extends React.Component {
  renderDefinition(item, index) {
    if (item.type !== LinkTypes.BRAND) {
      return (
        <DefinitionDescriptionLink
          key={index}
          type={item.type}
          text={item.text}
          href={item.href} />
      );
    }
    else {
      return (
        <DefinitionDescriptionBrand
          key={index}
          text={item.text}
        />
      );
    }
  }

  render() {
    return (
      <Dl>
        <Dt>
          {this.props.title}
        </Dt>
        {this.props.definitionDescriptions.map(this.renderDefinition)}
      </Dl>
    );
  }
}

export default FooterDefinitionList;