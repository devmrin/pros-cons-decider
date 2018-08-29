import React, { Component } from 'react';
import ProConList from '../ProConList';
import Header from '../../Component/Header';
import EmptyState from '../../Component/EmptyState';

import './HomePage.css';

class HomePage extends Component {
  state = {
    lists: [
      {
        label: 'Samsung S9',
        pros: ['great display'],
        cons: ['poor battery life']
      },
      {
        label: 'iPhone X',
        pros: ['supreme screen real-estate'],
        cons: ['notch']
      }
    ]
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
    let updatedLists = this.state.lists.filter(list => list.label !== label);
    this.setState({
      lists: [...updatedLists]
    });
  };

  changeListLabelHeading = (selectedList, label) => {
    let updatedLists = this.state.lists.map(list => {
      if (list.label === selectedList.label) {
        list.label = label;
      }
      return list;
    });
    this.setState({
      lists: updatedLists
    });
  };

  //add pro list item
  addProToList = (selectedList, val) => {
    // alert(`add ${val} as pro to ${selectedList.label} list.`);
    let updatedLists = this.state.lists.map(list => {
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
      lists: updatedLists
    });
  };

  //add con list item
  addConToList = (selectedList, val) => {
    // alert(`add ${val} as con to ${selectedList.label} list.`);
    let updatedLists = this.state.lists.map(list => {
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
      lists: updatedLists
    });
  };

  //individual pro/con item delete
  //Pro items
  handleProItemDelete = (selectedList, pro, index) => {
    let updatedLists = this.state.lists.map(list => {
      if (list.label === selectedList.label) {
        list.pros.splice(index, 1);
      }
      return list;
    });
    this.setState({
      lists: updatedLists
    });
  };

  //Con items
  handleConItemDelete = (selectedList, con, index) => {
    let updatedLists = this.state.lists.map(list => {
      if (list.label === selectedList.label) {
        list.cons.splice(index, 1);
      }
      return list;
    });
    this.setState({
      lists: updatedLists
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
                handleProItemDelete={this.handleProItemDelete}
                handleConItemDelete={this.handleConItemDelete}
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
