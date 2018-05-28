import React from 'react';
import { NavLink } from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const SideBar = ({ navMenuItems, drawerOpen, onRequestChange, handleClose, }) => {
  return (
    <Drawer
      docked={false}
      open={drawerOpen}
      onRequestChange={onRequestChange}>

      {navMenuItems.map((item, index) => {
        return (
          <MenuItem
            key={index}
            primaryText={item.text}
            onTouchTap={handleClose}
            containerElement={
              <NavLink style={{ textDecoration: 'none' }} to={item.href}/>
            }
          />
        );
      })}
    </Drawer>
  );
}

export default SideBar;