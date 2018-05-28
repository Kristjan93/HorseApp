import React from 'react';
import styled from 'styled-components';


import { LinkTypes } from './services/linkTypes';

import CompanyLogoImage from '../CompanyLogoImage';
import FooterDefinitionList from './components/FooterDefinitionList';

const StyledFooter = styled.footer`
  background: #edeff0;
  color: #8d9aa5;
`
const Div = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 26px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const definitionLists = [
  {
    title: (<a href='/'><CompanyLogoImage style={{ width: '105px' }} /></a>),
    definitionDescriptions: [
      {
        type: LinkTypes.BRAND,
        text: 'General information concerning what the company is all about.',
      }
    ],
  },
  {
    title: 'Contact',
    definitionDescriptions: [
      {
        type: LinkTypes.EMAIL,
        text: 'geysirhorses@gmail.com',
        href: "mailto:geysirhorses@gmail.com",
      },
      {
        type: LinkTypes.PHONE,
        text: 'Tel: +354 774-1149',
        href: "tel:+6494452687",
      }
    ],
  },
  {
    title: 'Address',
    definitionDescriptions: [
      {
        type: LinkTypes.LOCATION,
        text: 'Myrkholt',
        href: 'https://goo.gl/maps/PArPqp6aQJ22',
      },
    ],
  },
];

class Footer extends React.Component {
  renderDefinitionList({title, definitionDescriptions}, index) {
    return (
      <FooterDefinitionList
        key={index}
        title={title}
        definitionDescriptions={definitionDescriptions} 
      />
    );
  }

  render() {
    return (
      <StyledFooter>
        <Div>
            {definitionLists.map(this.renderDefinitionList)}
        </Div>
      </StyledFooter>
    );
  }
}

export default Footer;


