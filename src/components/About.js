import React from 'react';

import profilePic from '../assets/images/profilepic.jpg';

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>A Little About Me</h2>

        <p>
          Hi, I am FX, a software developer and former lawyer based in Montréal,
          Québec.
        </p>
        <p>
          My passion for software engineering comes from an early-age enthusiasm
          for video games and technology. My specific interests are geared
          towards web &amp; mobile apps technologies, infrastructure and
          software engineering best practices.
        </p>
        <p>
          Outside tech, what I enjoy most is music (drums and trumpet), scotch
          tasting and boxing.
        </p>
      </div>
    </div>
  </section>
);

export default About;
