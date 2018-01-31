import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>McGill University, Montréal</h3>
          <p className="info">
            B.Sc. in Computer Science <span>&bull;</span> <em className="date">2012 – 2016</em>
          </p>

          <div className="desc">
            <p>Exchange semester at the National University of Singapore (NUS), Winter 2014.</p>
            <p>Major in Software Engineering (<a target="_blank" href="http://www.mcgill.ca/study/2012-2013/faculties/science/undergraduate/programs/bachelor-science-bsc-major-software-engineering">curriculum</a>) with an emphasis on databases, distributed systems, software development and software architecture.</p>
          </div>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>School of Québec Bar, Montréal</h3>
          <p className="info">
            Registered to the Roll of Order
            <span>&bull;</span>
            <em className="date">2011</em>
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Université de Montréal, Montréal</h3>
          <p className="info">
            LL.B
            <span>&bull;</span>
            <em className="date">2007 – 2010</em>
          </p>

          <div className="desc">
            <p>Emphasis on Intellectual Property, Cyberspace, Information and Communication, Negociation and Corporate Law.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
