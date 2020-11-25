import React from 'react';

import Education from './Education';
import Skills from './Skills';
import Work from './Work';

const Resume = (props) => (
  <section id="resume">
    <Education />
    <Skills />
    <Work techstack={props.techstack} />
  </section>
);

export default Resume;
