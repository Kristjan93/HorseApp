import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

var Ul = styled.ul`
  padding-left: 0;
  list-style-type: none; 
  margin: 0;
`;

var Li = styled.li`
  list-style-type: none;
  float: left;
  padding: 0;
`;

const StyledLink =  styled(NavLink)`
  position: relative;
  cursor: pointer;
  height: 100%;
  display: inline-block;
  transition: background-color .3s;
  text-decoration: none;
  
  :hover {
    background: rgba(0,0,0,.2);
  }
`;

var Span = styled.span`
  font-weight: 400;
  padding: 0 15px;
  color: #fff;
  font-size: 20px;
  line-height: 64px;
`;

const HeaderNavMenu = ({ navMenuItems }) => {
  return (
    <nav>
      <Ul key='ul'>
        {navMenuItems.map((item, index) => {
          return (
            <Li key={index}>

              <StyledLink to={item.href} key={index}>
                <Span>
                  {item.text}
                </Span>
              </StyledLink>
            </Li>
          );
        })}
      </Ul>
    </nav>
  );
}

export default HeaderNavMenu;