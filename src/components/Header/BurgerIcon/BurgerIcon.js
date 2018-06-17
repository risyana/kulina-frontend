import React from 'react';

const BurgerIcon = props => (
  <div
    className="BurgerIcon"
    onClick={props.onClickBackdrop}
    role="presentation"
  >
    <span />
    <span />
    <span />
  </div>
);

export default BurgerIcon;
