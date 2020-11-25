import React from "react";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaGitlab,
  FaChevronCircleUp
} from "react-icons/fa";

const Footer = () => (
  <footer id="footer">
    <h1>Stay in touch!</h1>
    <div className="row">
      <div className="twelve columns">
        <ul className="social-links">
          <li>
            <a target="_blank" rel="noreferrer" href="mailto:fxlemire@webjomp.com">
              <FaEnvelope />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/fxlemire">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/fxlemire">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/fxlemire">
              <FaGithub />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://gitlab.com/fxlemire">
              <FaGitlab />
            </a>
          </li>
        </ul>

        <ul className="copyright">
          <li>&copy; 2018 François-Xavier Lemire</li>
          <li>
            Shoutout to <a href="http://www.amanhimself.me">Aman Mittal</a> for the <a href="https://github.com/amandeepmittal/gatsby-starter-ceevee">Gatsby starter</a>
          </li>
        </ul>
      </div>

      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <FaChevronCircleUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
