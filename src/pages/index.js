import React from 'react';
import { Container } from 'react-bootstrap';
import Helmet from 'react-helmet';
import styles from '../styles/index.module.scss';
import Intro from '../components/intro.js';
import Sidebar from '../components/sidebar.js';
import Portfolio from '../components/portfolio.js';
import favicon from '../images/favicon.ico';

export default function Home() {
  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
        <meta charSet="utf-8" />
        <title>Felipe's Portfolio</title>
      </Helmet>
      <Container className={`position-relative ${styles.verticalGrid}`}>
        <Intro />
        <Sidebar />
        <Portfolio />
      </Container>
    </>
  );
}
