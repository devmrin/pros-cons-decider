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

  //add pro list item
  addProToList = (selectedList, val) => {
    // alert(`add ${val} as pro to ${selectedList.label} list.`);
    let updatedList = this.state.lists.map(list => {
      if (list.label === selectedList.label) {
        list.pros = [...list.pros, val];
      }
      return list;
    });
    this.setState({
      lists: updatedList
    });
  };

  //add con list item
  addConToList = (selectedList, val) => {
    // alert(`add ${val} as con to ${selectedList.label} list.`);
    let updatedList = this.state.lists.map(list => {
      if (list.label === selectedList.label) {
        list.cons = [...list.cons, val];
      }
      return list;
    });
    this.setState({
      lists: updatedList
    });
  };

  render() {
    let { lists } = this.state;
    return (
      <div className="HomePage">
        <Header createNewList={this.createNewList} />
        <div className="listContainer">
          {lists && lists.length >= 1 ? (
            lists.map((list, index) => (
              <ProConList
                key={index}
                removeAList={this.removeAList}
                addProToList={this.addProToList}
                addConToList={this.addConToList}
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
