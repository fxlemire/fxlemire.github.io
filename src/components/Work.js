import React from 'react';

import angular from '../assets/images/tech/angular.svg';
import bootstrap from '../assets/images/tech/bootstrap.svg';
import gatsby from '../assets/images/tech/gatsby.svg';
import graphql from '../assets/images/tech/graphql.svg';
import mocha from '../assets/images/tech/mocha.svg';
import sass from '../assets/images/tech/sass.svg';
import typescript from '../assets/images/tech/typescript.svg';
import webpack from '../assets/images/tech/webpack.svg';

const TECHSTACK_WIDTH = 60;

const Work = ({ techstack }) => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>
            <a
              target="_blank"
              rel="noreferrer"
              href="http://www.tower10labs.com/"
            >
              Tower10 Labs
            </a>
          </h3>
          <p className="info">
            Principal Engineer &amp; Partner <span>&bull;</span> Toronto{' '}
            <span>&bull;</span> <em className="date">2017 – Present</em>
          </p>

          <p className="info">
            Tower10 focuses on formulating and executing growth strategies.
          </p>

          <h5>Tech Exposure</h5>

          <div className="techstack">
            <a target="_blank" rel="noreferrer" href="https://nodejs.org/en/">
              <img src={techstack.nodejs} alt="Node.js" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://angular.io/">
              <img src={angular} width={TECHSTACK_WIDTH} alt="Angular 2" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://ionicframework.com/docs/"
            >
              <img src={techstack.ionic2} alt="Ionic 2" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.typescriptlang.org/"
            >
              <img src={typescript} width={TECHSTACK_WIDTH} alt="TypeScript" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://getbootstrap.com/"
            >
              <img src={bootstrap} width={TECHSTACK_WIDTH} alt="Bootstrap" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://git-scm.com/">
              <img src={techstack.git} alt="Git" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://webpack.js.org/">
              <img src={webpack} width={TECHSTACK_WIDTH} alt="Webpack" />
            </a>
          </div>

          <h5>Tasks</h5>

          <ul>
            <li>Oversee engineering projet</li>
            <li>Perform research and development</li>
            <li>Oversee technology stack</li>
            <li>Design architecture</li>
          </ul>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>
            <a target="_blank" rel="noreferrer" href="https://www.webjomp.com">
              Webjomp
            </a>
          </h3>
          <p className="info">
            Founder <span>&bull;</span> Montréal <span>&bull;</span>{' '}
            <em className="date">2016 – Present</em>
          </p>

          <p className="info">
            Webjomp improves the online presence of companies and individuals,
            as well as their overall growth strategies.
          </p>

          <h5>Tech Exposure</h5>

          <div className="techstack">
            <a target="_blank" rel="noreferrer" href="https://reactjs.org/">
              <img src={techstack.react} alt="React" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://redis.io/">
              <img src={techstack.redis} alt="Redis" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://mariadb.org/">
              <img src={techstack.mariadb} alt="MariaDB" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://facebook.github.io/jest/"
            >
              <img src={techstack.jest} alt="Jest" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.gatsbyjs.org/"
            >
              <img src={gatsby} width={TECHSTACK_WIDTH} alt="Gatsby" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://yarnpkg.com/en/">
              <img src={techstack.yarn} alt="Yarn" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://vuejs.org/">
              <img src={techstack.vue} alt="Vue.js" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://gulpjs.com/">
              <img src={techstack.gulp} alt="Gulp" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.mongodb.com/">
              <img src={techstack.mongodb} alt="MongoDB" />
            </a>
            <a target="_blank" rel="noreferrer" href="http://es6-features.org/">
              <img src={techstack.es6} alt="Javascript ES6" />
            </a>
            <a target="_blank" rel="noreferrer" href="http://graphql.org/">
              <img src={graphql} width={TECHSTACK_WIDTH} alt="GraphQL" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://cloud.google.com/appengine/"
            >
              <img src={techstack.gappengine} alt="Google App Engine" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.heroku.com/">
              <img src={techstack.heroku} alt="Heroku" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.drupal.org/">
              <img src={techstack.drupal} alt="Drupal" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://getmdl.io/">
              <img src={techstack.mdl} alt="Material Design Lite" />
            </a>
            <a target="_blank" rel="noreferrer" href="http://yeoman.io/">
              <img src={techstack.yeoman} alt="Yeoman" />
            </a>
          </div>

          <h5>Tasks</h5>

          <ul>
            <li>Identify clients' needs</li>
            <li>Establish timetables and oversee projet management</li>
            <li>Elaborate a technology strategy to improve client's ROI</li>
            <li>
              Devise architecture and develop websites, web apps and softwares
            </li>
            <li>Write documentation</li>
            <li>Contribute to Open Source projects</li>
            <li>
              Manage all non-tech aspects of the company (PR, accounting,
              marketing)
            </li>
          </ul>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>
            <a target="_blank" rel="noreferrer" href="https://www.kopi.cafe">
              Kopi
            </a>
          </h3>
          <p className="info">
            Founder <span>&bull;</span> Montréal <span>&bull;</span>{' '}
            <em className="date">May – Aug 2017</em>
          </p>

          <p className="info">
            Kopi brings a barista with professional equipment to your office or
            event.
          </p>

          <h5>Tech Exposure</h5>

          <div className="techstack">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ruby-lang.org/en/"
            >
              <img src={techstack.ruby} alt="Ruby" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://jekyllrb.com/">
              <img src={techstack.jekyll} alt="Jekyll" />
            </a>
            <a target="_blank" rel="noreferrer" href="http://sass-lang.com/">
              <img src={sass} width={TECHSTACK_WIDTH} alt="SASS" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.redmine.org/">
              <img src={techstack.redmine} alt="Redmine" />
            </a>
          </div>

          <h5>Tasks</h5>

          <ul>
            <li>Acquired clients and concluded partnerships</li>
            <li>Conceived growth &amp; marketing strategies</li>
            <li>Developed and managed online presence</li>
            <li>Managed the team and established deadlines</li>
            <li>
              Handled logistics involved in coffee delivery and barista
              on-the-go
            </li>
            <li>Ensured the smooth operation of serving +2000 people crowds</li>
            <li>
              Last but not least, pulled espresso shots and prepared
              espresso-based drinks{' '}
              <span role="img" aria-label="espresso shot">
                ☕
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>
            <a target="_blank" rel="noreferrer" href="https://vungle.com/">
              Vungle
            </a>
          </h3>
          <p className="info">
            Software Engineering Intern <span>&bull;</span> San Francisco{' '}
            <span>&bull;</span> <em className="date">May – Aug 2015</em>
          </p>

          <p className="info">
            Vungle is the leading in-app video advertising platform for
            performance marketers and developers.
          </p>

          <h5>Tech Exposure</h5>

          <div className="techstack">
            <a target="_blank" rel="noreferrer" href="https://www.docker.com/">
              <img src={techstack.docker} alt="Docker" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.android.com/">
              <img src={techstack.android} alt="Android" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.apple.com/ios/ios-11/"
            >
              <img src={techstack.ios} alt="iOS" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://maven.apache.org/"
            >
              <img src={techstack.maven} alt="Maven" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.npmjs.com/">
              <img src={techstack.npm} alt="NPM" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://java.com/">
              <img src={techstack.java} alt="Java" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html"
            >
              <img src={techstack.objectivec} alt="Objective C" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://mochajs.org/">
              <img src={mocha} width={TECHSTACK_WIDTH} alt="Mocha" />
            </a>
          </div>

          <h5>Tasks</h5>

          <ul>
            <li>
              Built with Maven a custom Apache Spark Java archive with the
              monitoring system Ganglia integrated
            </li>
            <li>
              Built a private NPM server using Sinopia database and Docker
              containers
            </li>
            <li>
              Coded backend logic in Javascript with tests using the Mocha
              framework
            </li>
            <li>
              Modified existing Android and iOS apps in order to integrate the
              newly coded backend logic
            </li>
            <li>
              Translated in French the tagline and mission statement of the
              company and supervised the documentation translation
            </li>
            <li>
              Closed a deal with a local gym to have private boxing lessons for
              a group of ten people{' '}
              <span role="img" aria-label="boxing glove">
                🥊
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>
            <a target="_blank" rel="noreferrer" href="http://beenox.com/en/">
              Beenox (Activision)
            </a>
          </h3>
          <p className="info">
            Gameplay Programmer Intern <span>&bull;</span> Québec{' '}
            <span>&bull;</span> <em className="date">Jan – Apr 2015</em>
          </p>

          <p className="info">
            Beenox is one of the major video game companies in Québec city,
            wholly owned subsidiary of Activision, which needs no introduction.
          </p>

          <h5>Tech Exposure</h5>

          <div className="techstack">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.perforce.com/"
            >
              <img src={techstack.perforce} alt="Perforce" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="http://www.cplusplus.com/"
            >
              <img src={techstack.cpp} alt="C++" />
            </a>
          </div>

          <h5>Tasks</h5>

          <ul>
            <li>
              Designed and coded in C++ different designer tools and gameplay
              elements for the blockbuster success Skylanders Superchargers
            </li>
            <li>
              Took part with designers and artists in taking decisions on
              various game elements
            </li>
            <li>
              Gave a talk to college students on the topic of working as a
              gameplay programmer
            </li>
          </ul>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.morganstanley.com/"
            >
              Morgan Stanley
            </a>
          </h3>
          <p className="info">
            Technology Summer Analyst <span>&bull;</span> Montréal{' '}
            <span>&bull;</span> <em className="date">May – Aug 2014</em>
          </p>

          <p className="info">
            Morgan Stanley is a leading Wall Street global financial services
            firm.
          </p>

          <h5>Tech Exposure</h5>

          <div className="techstack">
            <a target="_blank" rel="noreferrer" href="https://angularjs.org/">
              <img src={angular} width={TECHSTACK_WIDTH} alt="Angular JS" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://gruntjs.com/">
              <img src={techstack.grunt} alt="Grunt" />
            </a>
            <a target="_blank" rel="noreferrer" href="http://lesscss.org/">
              <img src={techstack.less} alt="Less" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.playframework.com/"
            >
              <img src={techstack.play} alt="Play" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.scala-lang.org/"
            >
              <img src={techstack.scala} alt="Scala" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.javascript.com/"
            >
              <img src={techstack.javascript} alt="JavaScript" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ibm.com/analytics/us/en/db2/"
            >
              <img src={techstack.db2} alt="DB2" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://karma-runner.github.io/2.0/index.html"
            >
              <img src={techstack.karma} alt="Karma" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://jasmine.github.io/"
            >
              <img src={techstack.jasmine} alt="Jasmine" />
            </a>
          </div>

          <h5>Tasks</h5>

          <ul>
            <li>
              Developed a web app end-to-end with technologies such as
              AngularJS, Less, Play, Spring, DB2, Karma, Jasmine, Grunt
            </li>
            <li>
              Computed metrics with thousands of queries stored in databases
              with a great care for performance, taking advantage of the
              functional programming features of Scala
            </li>
            <li>
              Presented the project to the Montreal office due to outstanding
              performance and results
            </li>
          </ul>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/fxlemire/"
            >
              More...
            </a>
          </h3>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
