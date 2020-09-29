import React, { Component } from 'react';
import { Fade } from 'react-awesome-reveal';
import Typist from 'react-typist';
import styles from '../styles/intro.module.scss';
import YAMLData from '../../content/My-YAML-Content.yaml';

function Links(props) {
  return (
    <div>
      <div
        id={styles.circle}
        style={props.show ? { display: 'block' } : { display: 'none' }}
      />
      <div
        className={styles.introP}
        style={props.show ? { display: 'block' } : { display: 'none' }}
      >

        <Fade duration={10}>
          <p
            dangerouslySetInnerHTML={{ __html: YAMLData.hello_p }}
          />
        </Fade>
        <Fade delay={100} duration={0}>
          <p className="divided">
            <span className="text-primary font-weight-bold">See more</span>
            <span className="center-line" />
            <span className="links d-inline">
              <i className="intro-link fab fa-github m-1" />
              <i className="intro-link fab fa-linkedin m-1" />
            </span>
          </p>
        </Fade>
      </div>
    </div>
  );
}

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
          <Typist
            cursor={{
              blink: true,
              hideWhenDone: true,
              hideWhenDoneDelay: 300,
            }}
            onTypingDone={this.show}
            avgTypingDelay={60}
            startDelay={250}
          >
            <span className={styles.hello}>Hello, I'm</span>
          </Typist>
          <h1
            style={this.state.showMyComponent ? { display: 'block' } : { display: 'none' }}
          >
            <Typist
              cursor={{
                blink: true,
                hideWhenDone: true,
              }}
              avgTypingDelay={140}
              startDelay={1000}
            >
              <span className={styles.name}>Felipe</span>
              <br />
              <span className={styles.name}>dos Anjos</span>
            </Typist>
          </h1>

          <Fade delay={3200} duration={0}>
            <Links show={this.state.showMyComponent} />
          </Fade>
        </div>
      </div>
    );
  }
}
