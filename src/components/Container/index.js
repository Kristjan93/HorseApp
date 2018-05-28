import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  padding: 1rem;
`;

class Container extends React.Component {
  render() {
    return (
      <Div style={ this.props.style }>
        {this.props.children}
      </Div>
    );
  }
}

export default Container;
