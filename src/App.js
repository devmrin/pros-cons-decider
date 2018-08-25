import React, { Component, Fragment } from 'react';
import HomePage from './Containers/HomePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment className="App">
        <HomePage />
      </Fragment>
    );
  }
}

export default App;
