import React from 'react';
import styled from 'styled-components';

import Dot from '../Dot';

const Div = styled.div`
  position: absolute;
  bottom: 8px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, index) {
    this.props.onChangeIndex(index)
  }

  render() {
    let { index, dots } = this.props;
    
    let children = [];
    for(let i = 0; i < dots; i++) {
      children.push(
        <Dot
        key={i}
        index={i}
        isActive={i === index}
        onClick={this.handleClick} />
      );
    };

    return (
      <Div>
        <span>
          {children}
        </span>
      </Div>
    );
  }
};

export default Pagination;