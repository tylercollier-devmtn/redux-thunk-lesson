import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { showNotification, text } = this.props;

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
        {showNotification && <div className="notification">{text}
        </div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showNotification: state.showNotification,
    text: state.text,
  };
};

export default connect(mapStateToProps)(App);
