import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import {
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/portfolio.module.scss';

const plus = <FontAwesomeIcon icon={faPlus} className={styles.icon} />;
const minus = <FontAwesomeIcon icon={faMinus} className={styles.icon} />;
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
            {this.props.projectDescription}
            <div className={styles.linkingLine} />
            <span className={styles.showSign}>
              {this.state.open}
            </span>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={this.props.eventKey}>
          <Card.Body>
            {this.props.projectDescription}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}

export default function Portfolio() {
  return (
    <Accordion>
      <Entry
        eventKey="0"
        p
        projectName="SwipEx"
        projectDescription="SwipEx"
      />

      <Entry
        eventKey="1"
        projectName="BusBot"
        projectDescription="BusBot"
      />

      <Entry
        eventKey="2"
        projectDescription="Stay in Touch"
        projectName="Stay in Touch"
      />
    </Accordion>
  );
}