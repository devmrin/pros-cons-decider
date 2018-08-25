import React, { Component } from 'react';
import Column from '../Column';
import './HomePage.css';

class HomePage extends Component {
  state = {
    lists: [
      {
        label: 'Home',
        pros: ['Save Money', 'Comforts of home'],
        cons: ['Friends & Relatives']
      },
      {
        label: 'Pune',
        pros: ['No Friends & Relatives'],
        cons: ['Lose Money']
      },
      {
        label: 'Bangalore',
        pros: ['Save Money'],
        cons: ['Relatives']
      }
    ]
  };

  render() {
    let { lists } = this.state;
    return (
      <div className="HomePage">
        {lists && lists.map(list => <Column list={list} />)}
      </div>
    );
  }
}

export default HomePage;
