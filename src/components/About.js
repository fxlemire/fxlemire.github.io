import React from "react";
import { FaCloudDownloadAlt } from 'react-icons/fa';

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>A Little About Me</h2>

        <p>Hi, I am FX, software developer and lawyer based in Montréal, Québec.</p>
        <p>My passion for software engineering comes from an early-age enthusiasm for video games and technology. My specific interests are geared towards web &amp; mobile apps technologies, infrastructure and software engineering best practices.</p>
        <p>Outside tech, what I enjoy most is music (drums and trumpet), scotch tasting and boxing.</p>

        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>François-Xavier Lemire</span>
              <br />
              <span>(514) 546-2694</span>
              <br />
              <span>fxlemire@webjomp.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="fxlemire-resume.pdf" className="button">
                <FaCloudDownloadAlt /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
