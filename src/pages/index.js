import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styles from '../styles/index.module.scss';
import Intro from '../components/intro.js';

export default function Home() {
  return (
    <Container className={styles.verticalGrid}>
      <Row>
        <Intro />
      </Row>
    </Container>
  );
}
