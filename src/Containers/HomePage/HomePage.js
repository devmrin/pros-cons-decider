import React, { Component } from 'react';
import ProConList from '../ProConList';
import Header from '../../Component/Header';
import EmptyState from '../../Component/EmptyState';

import './HomePage.css';

class HomePage extends Component {
  state = {
    lists: []
  };

  render() {
    let { lists } = this.state;
    return (
      <div className="HomePage">
        <Header />
        <div className="listContainer">
          {lists && lists.length >= 1 ? (
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
