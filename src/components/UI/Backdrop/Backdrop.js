import React from 'react';

const Backdrop = props => (
  <div
    onClick={props.onClickBackdrop}
    role="presentation"
    className="Backdrop"
  />
);

export default Backdrop;

