import React from 'react';
import styled from 'styled-components';

const Dd = styled.dd`
  margin: 0;
  padding: 0;
  border: 0;
`

class DefinitionDescriptionBrand extends React.Component {
  render() {
    return (
      <Dd>
        {this.props.text}
      </Dd>
    );
  }
}

export default DefinitionDescriptionBrand;
