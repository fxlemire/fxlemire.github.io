import $ from 'jquery';
import React, { Component } from 'react';

class Navigation extends Component {
  componentDidMount() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('#nav-wrap').addClass('color-scrolled');
      }
      if ($(this).scrollTop() < 50) {
        $('#nav-wrap').removeClass('color-scrolled');
      }
    });
  }

  render() {
    return (
      <nav id="nav-wrap">
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label */}
        <a className="mobile-btn" href="#nav-wrap" />
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
