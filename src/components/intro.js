import React, { Component } from 'react';
import { Fade } from 'react-awesome-reveal';
import Typist from 'react-typist';
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/intro.module.scss';
import YAMLData from '../../content/My-YAML-Content.yaml';

function Links(props) {
  return (
    <div>
      <div
        id={styles.circle}
        style={props.show ? { display: 'block' } : { display: 'none' }}
      />
      <Fade delay={4300} duration={300}>
        <div
          className={styles.introP}
          style={props.show ? { display: 'block' } : { display: 'none' }}
        >

          <p
            dangerouslySetInnerHTML={{ __html: YAMLData.hello_p }}
          />
          <p className={styles.divided}>
            <span className={styles.seeMore}>See more</span>
            <span className={styles.centerLine} />
            <span className={styles.links}>
              <a href="https://github.com/fc-anjos/" target="_blank">
                <FontAwesomeIcon icon={faGithub} className={styles.icon} />
              </a>
              <a href="https://www.linkedin.com/in/fc-anjos/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
              </a>
            </span>
          </p>
        </div>
      </Fade>
    </div>
  );
}

export default class Intro extends Component {
  state = {
    show_name: false,
    show_p: false,
  }

  showName = () => {
    this.setState({
      show_name: true,
    });
  }

  showP = () => {
    setTimeout(() => {
      this.setState({
        show_p: true,
      });
    }, 200);
  }

  render() {
    return (
      <div className={`col-5 ${styles.firstScreen}`}>
        <div className={styles.presentation}>
          <Typist
            cursor={{
              show: false,
              // blink: true,
              // hideWhenDone: true,
              // hideWhenDoneDelay: 300,
            }}
            onTypingDone={this.showName}
            avgTypingDelay={60}
            startDelay={250}
          >
            <span className={styles.hello}>Hello, I'm</span>
          </Typist>
          <h1
            style={this.state.show_name ? { display: 'block' } : { display: 'none' }}
          >
            <Typist
              cursor={{
                blink: true,
                hideWhenDone: true,
              }}
              avgTypingDelay={140}
              startDelay={1000}
              onTypingDone={this.showP}
            >
              <span className={styles.name}>Felipe</span>
              <br />
              <span className={styles.name}>dos Anjos</span>
            </Typist>
          </h1>
          <Links show={this.state.show_p} />
        </div>
      </div>
    );
  }
}
