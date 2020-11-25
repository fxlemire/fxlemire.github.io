import React from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm François-Xavier.</h1>
      <h3><center>(Call me FX.)</center></h3>
      <h3>
        I'm a Montreal-based software developer creating awesome web apps for companies of all sizes around the globe. <a className="smoothscroll" href="#about">Learn more about me</a> and let's stay connected!
      </h3>
      <hr />
      <ul className="social">
        <li>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/fxlemire">
            <FaTwitterSquare />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/fxlemire/">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/fxlemire">
            <FaGithubSquare />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Banner;
