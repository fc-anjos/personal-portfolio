import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileDownload, faCube, faHashtag, faLightbulb, faHeart,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/about.module.scss';
import Resume from '../../downloads/Felipe_dos_Anjos.pdf';

function SkillCard(props) {
  const listItems = props.ul_items.map(item => (
    <li>
      {item}
    </li>
  ));

  return (
    <div className={styles.skillCard}>
      <FontAwesomeIcon
        icon={props.icon}
        className={`${styles.cardIcon} ${props.iconColorClass}`}
      />
      <h2>{props.title}</h2>
      <ul className="list-unstyled">
        {listItems}
      </ul>
    </div>
  );
}

const AboutText = props => (
  <div className={styles.aboutRight}>
    <span className={styles.sectionIndex}>03</span>
    <span className={styles.subTitle}>
      A litter more...
    </span>
    <h1 className="sectionTitle">About Me</h1>
    <div className={styles.aboutP}>
      <p>
        Pursuing a transdisciplinary education, I think about skills as
        <i> tools to build projects with </i>
        , instead of just taking them at their face value.
      </p>
      <p>
        My interests are multiple but never scattered: this stance supports learning how to learn and aids at dealing with challenges creatively.
      </p>
    </div>
    <a className={styles.resumeLink} href={Resume} download>
      Download my Resume
      <FontAwesomeIcon icon={faFileDownload} className={styles.icon} />
    </a>
  </div>
);

export default function About() {
  return (
    <Fade fraction={0.4} triggerOnce>
      <section className={styles.aboutSection} id="about">
        <div className={styles.cardsWrapper}>
          <SkillCard
            title="Languages"
            ul_items={['Python', 'Ruby', 'JavaScript', 'HTML/CSS', 'SQL']}
            icon={faHashtag}
            iconColorClass={styles.cardIconGreen}
          />
          <SkillCard
            title="Frameworks"
            ul_items={['React', 'Ruby on Rails', 'Bootstrap', 'RSpec', 'PostGIS']}
            icon={faCube}
            iconColorClass={styles.cardIconBlue}
          />
          <SkillCard
            title="Skills"
            ul_items={['UNIX', 'Git', 'Heroku', 'AWS']}
            icon={faLightbulb}
            iconColorClass={styles.cardIconYellow}
          />
          <SkillCard
            title="Education"
            ul_items={['Architecture', 'Philosophy', 'Software Development']}
            icon={faHeart}
            iconColorClass={styles.cardIconRed}
          />
        </div>
        <AboutText />
      </section>
    </Fade>
  );
}
