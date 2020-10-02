import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/about.module.scss';

const SkillCard = props => (
  <div className={styles.skillCard} />
);

const AboutText = props => (
  <div className={styles.aboutRight}>
    <span className={styles.sectionIndex}>03</span>
    <span className={styles.subTitle}>
      A litter more...
    </span>
    <h1 className="sectionTitle">About Me</h1>
    <p className={styles.aboutP}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <a className={styles.resumeLink} href="">
      Download my Resume
      <FontAwesomeIcon icon={faFileDownload} className={styles.icon} />
    </a>
  </div>
);

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.cardsWrapper}>
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
      <AboutText />
    </section>
  );
}
