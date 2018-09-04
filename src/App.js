import React, { Component } from 'react';
import HomePage from './Containers/HomePage';

import docRef from './firebase';

class App extends Component {
  state = {
    lists: []
  };

  // custom loading
  loading() {
    docRef
      .get()
      .then(doc => {
        if (doc && doc.exists) {
          this.setState({
            lists: doc.data().lists
          });
        }
      })
      .then(() => {
        console.log('firestore initialized');
        const ele = document.getElementById('ipl-progress-indicator');
        if (ele) {
          // fade out
          ele.classList.add('available');
          setTimeout(() => {
            // remove from DOM
            ele.outerHTML = '';
          }, 0);
        }
      })
      .catch(err => console.log(`Got an error: ${err}`));
  }

  getRealTimeUpdates = () => {
    docRef.onSnapshot(doc => {
      if (doc && doc.exists) {
        this.setState(
          {
            lists: doc.data().lists
          },
          () => console.log('onSnapshotUpdated')
        );
      }
    });
  };

  componentDidMount() {
    //loading resolve
    this.loading();
    //add onUpdate listener
    this.getRealTimeUpdates();
  }

  render() {
    return (
      <div className="App">
        <HomePage lists={this.state.lists} />
      </div>
    );
  }
}

export default App;
