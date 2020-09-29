import React from 'react';
import { Fade } from 'react-awesome-reveal';
import styles from '../styles/sidebar.module.scss';

export default function Sidebar() {
  return (
    <ul className={`${styles.sidebar} m-0 p-0`}>
      <Fade delay={4800} duration={300} cascade damping={0.5}>
        <li><a href="#">Hello</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </Fade>
    </ul>

  );
}
