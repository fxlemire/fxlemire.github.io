import React from "react";

import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";

const Resume = (props) => (
  <section id="resume">
    <Education />
    <Skills />
    <Work techstack={props.techstack} />
  </section>
);

export default Resume;
