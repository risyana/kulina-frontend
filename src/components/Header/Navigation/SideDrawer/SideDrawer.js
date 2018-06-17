import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';

const SideDrawer = props => (
  <div
    className="SideDrawer"
    style={props.isBackdropOpen ? { transform: 'translateY(0)' } : { transform: 'translateX(100%)' }}
  >
    <nav className="NavMobile">
      <NavigationItems />
    </nav>
  </div>
);

export default SideDrawer;
