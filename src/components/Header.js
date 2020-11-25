import React from 'react';

import Banner from './Banner';
import Navigation from './Navigation';
import ScrollDown from './ScrollDown';

const Header = (props) => (
  <header
    id="home"
    style={{ backgroundImage: `url(${props.backgroundImage})` }}
  >
    <Navigation />
    <Banner />
    <ScrollDown />
  </header>
);

export default Header;
