import React, { Component } from 'react';
import Typist from 'react-typist';
import styles from '../styles/intro.module.scss';
import YAMLData from '../../content/My-YAML-Content.yaml';

export default class Intro extends Component {
  state = {
    showMyComponent: false,
  }

  show = () => {
    this.setState({
      showMyComponent: true,
    });
  }

  render() {
    return (
      <div className={`col-5 ${styles.firstScreen}`}>
        <div className={styles.presentation}>
          <span className={styles.hello}>Hello, I'm</span>
          <h1>
            <Typist
              cursor={{
                blink: true,
                hideWhenDone: true,
              }}
              onTypingDone={this.show}
            >
              <span className={styles.name}>Felipe</span>
              <br />
              <span className={styles.name}>dos Anjos</span>
            </Typist>
          </h1>
          <div className="name">
            <div
              id={styles.circle}
              style={this.state.showMyComponent ? { display: 'block' } : { display: 'none' }}
            />
          </div>
          <div
            className={styles.introP}
            style={this.state.showMyComponent ? { display: 'block' } : { display: 'none' }}
          >
            <p
              dangerouslySetInnerHTML={{ __html: YAMLData.hello_p }}
            />
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
    );
  }
}
