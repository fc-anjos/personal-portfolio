import React from 'react';
import { graphql } from 'gatsby';
import styles from '../styles/intro.module.scss';
import YAMLData from '../../content/My-YAML-Content.yaml';

export default function Intro() {
  return (
    <div className="intro">
      <div className="col-2" />
      <div className={`col-5 ${styles.firstScreen}`}>
        <div className={styles.presentation}>
          <span className={styles.hello}>Hello, I'm</span>
          <h1 className={styles.name}>Felipe dos Anjos</h1>
          <div className="name">
            <span id="typedName" />
            <div id="circle" className="hidden-intro" />
          </div>
          <div className="hidden-intro">
            <p className="intro-text mt-3">
              {YAMLData.hello_p}
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
