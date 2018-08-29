import React, { Component } from 'react';
import HomePage from './Containers/HomePage';
import './App.css';

class App extends Component {
  // custom loading
  loading() {
    return new Promise(resolve => setTimeout(resolve, 1000));
  }

  componentDidMount() {
    //loading resolve
    this.loading().then(() => {
      const ele = document.getElementById('ipl-progress-indicator');
      if (ele) {
        // fade out
        ele.classList.add('available');
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = '';
        }, 2000);
      }
    });
  }
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
