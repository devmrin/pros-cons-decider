import React, { Component } from 'react';
import ProConList from '../ProConList';
import Header from '../../Component/Header';
import EmptyState from '../../Component/EmptyState';

import './HomePage.css';

class HomePage extends Component {
  state = {
    lists: []
  };

  createNewList = label => {
    this.setState({
      lists: [...this.state.lists, { label, pros: [], cons: [] }]
    });
  };

  render() {
    let { lists } = this.state;
    return (
      <div className="HomePage">
        <Header createNewList={this.createNewList} />
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
