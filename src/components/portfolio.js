import React, { Component } from 'react';
import {
  Accordion, Card, Button, Row, Container, Col,
} from 'react-bootstrap';
import {
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/portfolio.module.scss';

const plus = <FontAwesomeIcon icon={faPlus} className={styles.icon} />;
const minus = <FontAwesomeIcon icon={faMinus} className={styles.icon} />;

function SectionTitle(props) {
  return (
    <>
      <div className="sectionIndexContainer">
        <span className="sectionIndex">
          {props.number}
        </span>
      </div>
      <span className="subTitle">
        {props.subtitle}
      </span>
      <h1 className="sectionTitle">
        {props.title}
      </h1>
    </>
  );
}

class Entry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: plus,
    };
  }

  toggle= () => {
    this.setState({
      open: this.state.open === plus ? minus : plus,
    });
  }

  render() {
    return (
      <Card className={styles.card}>
        <Card.Header className={styles.cardHeader}>
          <Accordion.Toggle
            className={styles.button}
            onClick={this.toggle}
            eventKey={this.props.eventKey}
          >
            {this.props.projectName}
            <div className={styles.linkingLine} />
            <span className={styles.showSign}>
              {this.state.open}
            </span>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={this.props.eventKey}>
          <Card.Body>
            <Container>
              <Row>
                <Col xs="8">
                  <img src={this.props.imgLink} className="img-responsive w-100" alt="" />
                </Col>
                <Col xs="4">
                  {this.props.projectDescription}
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}

export default function Portfolio() {
  return (
    <section className={styles.sectionContainer}>
      <SectionTitle
        subtitle="Some recent work"
        title="Portfolio"
        number="02"
      />
      <Accordion className={styles.accordion}>
        <Entry
          eventKey="0"
          p
          projectName="SwipEx"
          projectDescription="SwipEx is the capstone project form Microverse's HTML-CSS module. Bootstrap with custom breakpoints is used extensively, re-arranging the content with its responsible break-points and changing margins and paddings accordingly. The project styling is done through SASS, organized in modularized units. "
          imgLink="https://raw.githubusercontent.com/fc-anjos/capstone-project-html-css/master/screenshot.PNG"
        />

        <Entry
          eventKey="1"
          projectName="BusBot"
          projectDescription="This Telegram bot connects to SPTrans API to estimate the arrival times for a given Bus Line at an specific Bus Stop in the city of São Paulo."
          imgLink="https://raw.githubusercontent.com/fc-anjos/telegram-bus-bot/development/screenshot.gif"
        />

        <Entry
          eventKey="2"
          projectDescription="Stay in Touch"
          projectName="Stay in Touch"
        />
      </Accordion>
    </section>
  );
}
