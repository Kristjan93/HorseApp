import React from 'react';
import styled from 'styled-components';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIco from 'material-ui/svg-icons/navigation/menu';

import FacebookIcon from '../FacebookIcon'
import HeaderNavMenu from './components/HeaderNavMenu';
import SideBar from './components/SideBar';

import { mediaBreakpoints } from '../../services/constants/breakpoints.js';

const NavBurgerButton = styled.div`
  margin-right: 26px;
`;

const HeaderNavMenuContainer = styled.div`
    flex: 1;
    ${mediaBreakpoints.max.tablet} {
      display: none;
    }
`;

const HeaderMediaButtonsContainer = styled.div`
  ${mediaBreakpoints.max.tablet} {
    flex: 1;
    text-align: right;
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onRequestChange = this.onRequestChange.bind(this);

    this.state = { drawerOpen: false };
  }

  handleToggle() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  handleClose() {
    this.setState({ drawerOpen: false });
  }

  onRequestChange(drawerOpen) {
    this.setState({ drawerOpen });
  }

  render() {
    return (
      <header>
        <AppBar
          style={{ top: 0, padding: 0, position: 'fixed' }}
          titleStyle={{ display: 'none' }}
          title={null}
          iconElementLeft={null}
          iconElementRight={null}
          showMenuIconButton={false}
        >

          <NavBurgerButton>
            <IconButton
              style={{ width: 72, height: 64, padding: 0 }}
              iconStyle={{ width: 26, height: 26 }}
              onTouchTap={this.handleToggle}
              >
              <MenuIco />
            </IconButton>
          </NavBurgerButton>

          <HeaderNavMenuContainer>
            <HeaderNavMenu navMenuItems={navMenuItems} />
          </HeaderNavMenuContainer>

          <HeaderMediaButtonsContainer>
            <IconButton
              href='https://www.facebook.com/Geysirhorses/'
              style={{ width: 72, height: 64, padding: 0, textAlign: 'center' }}
              iconStyle={{ width: 26, height: 64, }}
            >
              <FacebookIcon />
            </IconButton>
          </HeaderMediaButtonsContainer>
        </AppBar>

        <SideBar
          navMenuItems={navMenuItems}
          drawerOpen={this.state.drawerOpen}
          onRequestChange={this.onRequestChange}
          handleToggle={this.handleToggle}
          handleClose={this.handleClose}
        />
      </header>
    );
  }
}

export default Header;

const navMenuItems = [
  { text: 'Home', href: '/' },
  { text: 'Short Tours', href: '/short-tours' },
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
];