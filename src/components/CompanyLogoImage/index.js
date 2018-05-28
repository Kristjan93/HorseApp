import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 50px;
    opacity: 0.6;
    transition: opacity 300ms;

    &:hover {
      opacity: 1;
    }
`

const CompanyLogoImage = (props) => {
  return (
    <Img
      src={'/images/logo.png'}
      alt="Company Logo: Name and a horse picture"
      style={ props.style }
    />
  );
}

export default CompanyLogoImage;