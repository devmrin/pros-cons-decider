import React, { Component } from 'react';
import './ProConList.css';

class ProConList extends Component {
  state = {
    addingPro: false,
    proVal: '',
    addingCon: false,
    conVal: ''
  };

  handleListDelete = () => {
    let { removeAList, list } = this.props;
    removeAList(list.label);
  };

  onAddProItem = () => {
    this.setState({
      addingPro: true
    });
  };

  onAddConItem = () => {
    this.setState({
      addingCon: true
    });
  };

  render() {
    let { proVal, conVal, addingCon, addingPro } = this.state;
    let { list } = this.props;
    return (
      <div className="Column">
        <div className="prosConsWrapper">
          <h2 className="columnHeading">
            <span className="listLabelHeading">{list && list.label}</span>
            <button onClick={this.handleListDelete} className="listDelBtn">
              remove
            </button>
          </h2>
          <div className="prosContainer">
            <div className="proconsHeading">PROS</div>
            <ul>
              {list &&
                list.pros &&
                list.pros.map(pro => <li key={pro}>{pro}</li>)}
              <li className="addListItem">
                <button
                  className={
                    addingPro ? 'addListItemBtn hideAddBtn' : 'addListItemBtn'
                  }
                  onClick={this.onAddProItem}
                >
                  + Add a pro
                </button>
                <input
                  type="text"
                  value={proVal}
                  className={
                    addingPro
                      ? 'addListItemInput appearListItemInput'
                      : 'addListItemInput'
                  }
                />
              </li>
            </ul>
          </div>
          <div className="divider" />
          <div className="consContainer">
            <div className="proconsHeading">CONS</div>
            <ul>
              {list &&
                list.cons &&
                list.cons.map(con => <li key={con}>{con}</li>)}
              <li className="addListItem">
                <button
                  className={
                    addingCon ? 'addListItemBtn hideAddBtn' : 'addListItemBtn'
                  }
                  onClick={this.onAddConItem}
                >
                  + Add a con
                </button>
                <input
                  type="text"
                  value={conVal}
                  className={
                    addingCon
                      ? 'addListItemInput appearListItemInput'
                      : 'addListItemInput'
                  }
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProConList;
