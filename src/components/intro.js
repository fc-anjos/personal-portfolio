import React from 'react';
import styles from '../styles/intro.module.scss';

export default function Intro() {
  return (
    <div className="intro">
      <div className="col-2" />
      <div className={`col-5 ${styles.first-screen}}`>
        <div className={styles.presentation}>
          <span className={styles.hello}>Hello, I'm</span>
          <h1 className={styles.name}>Felipe dos Anjos</h1>
          <div className="name">
            <span id="typedName" />
            <div id="circle" className="hidden-intro" />
          </div>
          <div className="hidden-intro">
            <p className="intro-text mt-3">
              I am a full-stack developer with experience supporting projects from inception to deployment.
              Skilled in Ruby on Rails, JavaScript, UNIX, Python, Data Visualization and Database Management, leveraging those skills to solve problems and gain insight into a variety of contexts,
              combining professional activity with academic interests.

            </p>
            <p className="divided">
              <span className="text-primary font-weight-bold">See more</span>
              <span className="center-line" />
              <span className="links d-inline">
                <i className="intro-link fab fa-github m-1" />
                <i className="intro-link fab fa-linkedin m-1" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
