import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showNotification, hideNotification } from './reducer';

class Component1 extends Component {
  constructor() {
    super();
    this.doThingAndShowNotification = this.doThingAndShowNotification.bind(this);
  }

  doThingAndShowNotification() {
    // This setTimeout simulates any async operation, e.g. an axios call.
    setTimeout(() => {
      this.props.showNotification('Did thing from component 1');
      // This setTimeout has nothing to do with the axios call. We just want to show the notification for a certain amount of time and then hide it.
      setTimeout(() => {
        this.props.hideNotification();
      }, 1500)
    }, 1500);
  }

  render() {
    return (
      <button onClick={this.doThingAndShowNotification}>Do thing and show notification</button>
    );
  }
};

const mapDispatchToProps = {
  showNotification: showNotification,
  hideNotification: hideNotification
};

export default connect(null, mapDispatchToProps)(Component1);
