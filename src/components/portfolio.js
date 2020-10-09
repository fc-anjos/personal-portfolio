import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';
import {
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade } from 'react-awesome-reveal';
import styles from '../styles/portfolio.module.scss';

const plus = (
  <>
    <FontAwesomeIcon icon={faPlus} className={styles.icon} />
  </>
);
const minus = <FontAwesomeIcon icon={faMinus} className={styles.icon} />;

function SectionTitle(props) {
  const {
    number, subtitle, title,
  } = props;
  return (
    <div className="sectionOpener">
      <div className="sectionIndexContainer">
        <span className="sectionIndex">
          {number}
        </span>
      </div>
      <span className="subTitle">
        {subtitle}
      </span>
      <h1 className="sectionTitle">
        {title}
      </h1>
    </div>
  );
}

class Entry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: plus,
    };
  }

  toggle = () => {
    const {
      open,
    } = this.state;

    this.setState({
      open: open === plus ? minus : plus,
    });
  }

  render() {
    const {
      imgLink, projectDescription, eventKey, projectTitle, projectSubTitle, projectLink,
    } = this.props;
    const { open } = this.state;
    return (
      <div className={styles.card}>
        <EntryHeader
          toggle={this.toggle}
          eventKey={eventKey}
          projectTitle={projectTitle}
          projectSubTitle={projectSubTitle}
          open={open}
        />
        <EntryBody
          eventKey={eventKey}
          imgLink={imgLink}
          projectDescription={projectDescription}
          projectLink={projectLink}
        />
      </div>
    );
  }
}

const EntryBody = props => {
  const {
    imgLink, projectDescription, eventKey, projectLink,
  } = props;

  const description = projectDescription.map(paragraph => (
    <p>
      {paragraph}
    </p>
  ));
  return (
    <Accordion.Collapse eventKey={eventKey}>
      <div className={styles.entryBody}>
        <div className={styles.imgContainer}>
          <img src={imgLink} className={styles.portfolioImage} alt="" />
        </div>
        <div className={styles.projectDescription}>
          {description}
          <a target="_blank" rel="noreferrer" className={styles.projectLink} href={`${projectLink}`}>Check it out on github</a>
        </div>
      </div>
    </Accordion.Collapse>
  );
};

const EntryHeader = props => {
  const {
    toggle, projectTitle, open, eventKey, projectSubTitle,
  } = props;
  return (
    <div className={styles.cardHeader} onClick={toggle}>
      <Accordion.Toggle className={styles.button} eventKey={eventKey}>
        <div className={styles.titleContainer}>
          <p className={styles.projectTitle}>
            {projectTitle}
          </p>
          <div className={styles.linkingLine} />
          <span className={styles.showSign}>
            {open}
          </span>
        </div>
        <div className={styles.projectSubTitle}>
          {projectSubTitle}
        </div>
      </Accordion.Toggle>
    </div>
  );
};

export default function Portfolio() {
  return (
    <section className={styles.sectionContainer} id="portfolio">
      <Fade duration={200} fraction={1} triggerOnce>
        <SectionTitle
          subtitle="Some recent..."
          title="Projects"
          number="02"
        />
      </Fade>
      <Accordion className={styles.accordion}>
        <Fade cascade duration={200} damping={0.5} fraction={0.4} triggerOnce>
          <Entry
            eventKey="0"
            p
            projectTitle="SwipEx"
            projectSubTitle="A mobile application to find new acquaintances."
            projectDescription={["Built as part of Microverse's full stack development program, this project is the implementation of a design by Vlad Ermakov, from Fireart Studio.", 'Bootstrap with custom breakpoints is used extensively, re-arranging the content with its responsible break-points and changing margins and paddings accordingly.The project styling is done through SASS, organized in modularized units.']}
            imgLink="https://raw.githubusercontent.com/fc-anjos/capstone-project-html-css/master/screenshot.PNG"
            projectLink="https://github.com/fc-anjos/capstone-project-html-css"
          />

          <Entry
            eventKey="1"
            projectTitle="BusBot"
            projectSubTitle="A telegram bot that will tell you the estimated arrival time for buses in São Paulo"
            projectDescription={['How long will my bus take? Discover in Telegram sending a message to @bus-statuses-bot', 'This Telegram bot connects to SPTrans API to estimate the arrival times for a given Bus Line at an specific Bus Stop in the city of São Paulo.']}
            imgLink="https://raw.githubusercontent.com/fc-anjos/telegram-bus-bot/development/screenshot.gif"
            projectLink="https://github.com/fc-anjos/telegram-bus-bot"
          />

          <Entry
            eventKey="2"
            projectSubTitle="A social media app built with Ruby on Rails."
            projectDescription={['This project explores problems such as authentication, self-referential tables and scopes in a classic social network app.', 'Built in partnership with Julio Añoveros']}
            projectTitle="Stay in Touch"
            imgLink="https://raw.githubusercontent.com/fc-anjos/ror-social-scaffold/development/docs/screenshot.png"
            projectLink="https://github.com/fc-anjos/ror-social-scaffold"
          />

        </Fade>
      </Accordion>
    </section>
  );
}
