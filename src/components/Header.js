import React from "react";

import Navigation from "./Navigation";
import Banner from "./Banner";
import ScrollDown from "./ScrollDown";

const Header = (props) => (
  <header id="home" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    <Navigation />
    <Banner />
    <ScrollDown />
  </header>
);

export default Header;
