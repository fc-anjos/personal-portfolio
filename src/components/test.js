import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Typist from 'react-typist';

const TypedTitle = () => {
  <h1
    style={this.state.shown ? { display: 'block' } : { display: 'none' }}
    className="sectionTitle"
  >
    <Typist
      cursor={{
        blink: true,
        hideWhenDone: true,
      }}
      avgTypingDelay={1400}
      startDelay={0}
      onTypingDone={this.showP}
    >
      Felipe dos Anjos
    </Typist>
  </h1>;
};
export default class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shown: false,
    };
  }

  onChange = isVisible => {
    this.setState({
      shown: !!isVisible,
    });
  }

  render() {
    return (
      <div>
        <VisibilitySensor onChange={this.onChange}>
          <h1>Test</h1>
        </VisibilitySensor>

      </div>
    );
  }
}
