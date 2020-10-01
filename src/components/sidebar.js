import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Col, Row } from 'react-bootstrap';
import styles from '../styles/sidebar.module.scss';

export default function Sidebar() {
  return (
    <Row className={styles.row}>

      <Col xs="11" clssName={styles.col} />
      <Col xs="1" className={styles.wrapper}>
        <ul className={`${styles.sidebar}`}>
          <Fade delay={4800} duration={300} cascade damping={0.5} triggerOnce>
            <li><a href="#">Hello</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </Fade>
        </ul>
      </Col>
    </Row>
  );
}
