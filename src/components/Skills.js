import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand p90 nodejs" />
            <em>Node.js</em>
          </li>
          <li>
            <span className="bar-expand p70 react" />
            <em>React / React Native</em>
          </li>
          <li>
            <span className="bar-expand p80 tsjs" />
            <em>TypeScript / JavaScript ES7</em>
          </li>
          <li>
            <span className="bar-expand p50 docker" />
            <em>Docker</em>
          </li>
          <li>
            <span className="bar-expand p90 teamwork" />
            <em>Teamwork</em>
          </li>
          <li>
            <span className="bar-expand p60 angion" />
            <em>Angular &amp; Ionic 2</em>
          </li>
          <li>
            <span className="bar-expand p110" />
            <em>Humor</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
