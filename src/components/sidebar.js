import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Col, Row } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styles from '../styles/sidebar.module.scss';

export default function Sidebar() {
  return (
    <Row className={styles.row}>

      <Col xs="11" className={styles.col} />
      <Col xs="1" className={styles.wrapper}>
        <ul className={`${styles.sidebar}`}>
          <Fade delay={4800} duration={300} cascade damping={0.5} triggerOnce>
            <li>
              <AnchorLink href="#hello">Hello</AnchorLink>
            </li>
            <li>
              <AnchorLink offset="100" href="#portfolio">Portfolio</AnchorLink>
            </li>
            <li>
              <AnchorLink offset="-100" href="#about">About</AnchorLink>
            </li>
            <li>
              <AnchorLink offset="100" href="#contact">Contact</AnchorLink>
            </li>
          </Fade>
        </ul>
      </Col>
    </Row>
  );
}
