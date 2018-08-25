import React, { Component } from 'react';
import ProConList from '../ProConList';
import Header from '../../Component/Header';
import EmptyState from '../../Component/EmptyState';

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
        <Header />
        <div className="listContainer">
          {lists ? (
            lists.map(list => <ProConList list={list} />)
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
