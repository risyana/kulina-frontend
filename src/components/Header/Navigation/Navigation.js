import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';
import BurgerIcon from '../BurgerIcon/BurgerIcon';

const Navigation = props => (
  <nav className="NavDesktop">
    <NavigationItems />
    <BurgerIcon onClickBackdrop={props.onClickBackdrop} />
  </nav>
);

export default Navigation;
