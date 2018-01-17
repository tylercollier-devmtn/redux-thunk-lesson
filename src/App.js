import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Component1 from './Component1';

class App extends Component {
  render() {
    const { shouldShowNotification, text } = this.props;

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <div className="flex">
          <div className="component"><Component1 /></div>
        </div>
        {shouldShowNotification && <div className="notification">{text}
        </div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shouldShowNotification: state.shouldShowNotification,
    text: state.text,
  };
};

export default connect(mapStateToProps)(App);
