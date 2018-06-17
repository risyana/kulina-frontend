import React from 'react';

const SideDrawer = (props) => {
  let style = { transform: 'translateX(100%)' };

  if (props.isBackdropOpen) {
    style = { transform: 'translateY(0)' };
  }

  return (
    <div
      className="SideDrawer"
      style={style}
    />
  );
};

export default SideDrawer;
