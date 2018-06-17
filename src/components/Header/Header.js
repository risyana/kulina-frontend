import React from 'react';
import '../../style/style.css';
import Navigation from './Navigation/Navigation';
import bg from '../../images/alvaro-reyes-500044-unsplash.png';

const backgroundStyle = { background: `url(${bg}) center center no-repeat`, backgroundSize: 'cover' };

const Header = props => (
  <div className="header-container" style={backgroundStyle}>
    <Navigation onClickBackdrop={props.onClickBackdrop} />
    <h1>
      Join Impactfull Company
    </h1>
    <div>
      <button onClick={() => window.scroll({ top: 500, behavior: 'smooth' })}>
        <i className="fa fa-angle-down" />
      </button>
    </div>
  </div>
);

export default Header;
