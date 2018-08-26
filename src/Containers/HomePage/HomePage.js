import React, { Component } from 'react';
import ProConList from '../ProConList';
import Header from '../../Component/Header';
import EmptyState from '../../Component/EmptyState';

import './HomePage.css';

class HomePage extends Component {
  state = {
    lists: [{ label: 'iPhone 7', pros: ['looks'], cons: ['cost'] }]
  };

  createNewList = label => {
    this.setState({
      lists: [...this.state.lists, { label, pros: [], cons: [] }]
    });
  };

  removeAList = label => {
    alert('remove ' + label);
    let updatedList = this.state.lists.filter(list => list.label !== label);
    this.setState({
      lists: [...updatedList]
    });
  };

  render() {
    let { lists } = this.state;
    return (
      <div className="HomePage">
        <Header createNewList={this.createNewList} />
        <div className="listContainer">
          {lists && lists.length >= 1 ? (
            lists.map(list => (
              <ProConList
                key={list.label}
                removeAList={this.removeAList}
                list={list}
              />
            ))
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
