import React, { Component } from 'react';
import HomePage from './Containers/HomePage';
import AlertBox from './Component/AlertBox';

class App extends Component {
  state = {
    showAlertBox: true
  };

  // custom loading
  loading() {
    return new Promise(resolve => setTimeout(resolve, 2000));
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
        }, 0);
      }
    });
  }

  //Alert Box Handle

  render() {
    let { showAlertBox } = this.state;
    return (
      <div className="App">
        <AlertBox show={showAlertBox} />
        <HomePage showAlertBox={showAlertBox} />
      </div>
    );
  }
}

export default App;
