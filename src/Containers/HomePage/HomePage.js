import React, { Component } from 'react';
import ProConList from '../ProConList';
import Header from '../../Component/Header';
import EmptyState from '../../Component/EmptyState';

import './HomePage.css';

class HomePage extends Component {
  state = {
    lists: [
      {
        label: 'iPhone X',
        pros: ['No Friends & Relatives'],
        cons: ['Lose Money']
      },
      {
        label: 'Samsung S9',
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
          {lists && lists.length >= 1 ? (
            lists.map(list => <ProConList key={list.label} list={list} />)
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
