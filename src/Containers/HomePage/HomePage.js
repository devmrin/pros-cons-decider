import React, { Component } from 'react';
import ProConList from '../ProConList';
import Header from '../../Component/Header';
import EmptyState from '../../Component/EmptyState';

import './HomePage.css';

class HomePage extends Component {
  state = {
    lists: [
      {
        label: 'tap on title to edit',
        pros: [],
        cons: []
      }
    ]
    // lists: []
  };

  createNewList = label => {
    let { lists } = this.state;
    if (lists && lists.length < 4) {
      this.setState({
        lists: [...this.state.lists, { label, pros: [], cons: [] }]
      });
    } else {
      alert('Currently only 4 lists are supported!');
    }
  };

  removeAList = label => {
    alert('remove ' + label);
    let updatedList = this.state.lists.filter(list => list.label !== label);
    this.setState({
      lists: [...updatedList]
    });
  };

  changeListLabelHeading = (selectedList, label) => {
    let updatedList = this.state.lists.map(list => {
      if (list.label === selectedList.label) {
        list.label = label;
      }
      return list;
    });
    this.setState({
      lists: updatedList
    });
  };

  //add pro list item
  addProToList = (selectedList, val) => {
    // alert(`add ${val} as pro to ${selectedList.label} list.`);
    let updatedList = this.state.lists.map(list => {
      if (list.label === selectedList.label) {
        if (list.pros.length < 15) {
          list.pros = [...list.pros, val];
        } else {
          alert(
            "If you need to add that many pros - maybe you're not doing it right"
          );
        }
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
        if (list.cons.length < 15) {
          list.cons = [...list.cons, val];
        } else {
          alert(
            "If you need to add that many cons - you're not really doing it right"
          );
        }
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
                changeListLabelHeading={this.changeListLabelHeading}
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
