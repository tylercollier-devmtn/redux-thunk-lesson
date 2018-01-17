import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showAndHideNotification } from './reducer';

class Component1 extends Component {
  constructor() {
    super();
    this.doThingAndShowNotification = this.doThingAndShowNotification.bind(this);
  }

  doThingAndShowNotification() {
    // This setTimeout simulates any async operation, e.g. an axios call.
    setTimeout(() => {
      this.props.showAndHideNotification('Did thing from component 1');
    }, 1500);
  }

  render() {
    return (
      <button onClick={this.doThingAndShowNotification}>Do thing and show notification 1</button>
    );
  }
};

const mapDispatchToProps = {
  showAndHideNotification: showAndHideNotification
};

export default connect(null, mapDispatchToProps)(Component1);
