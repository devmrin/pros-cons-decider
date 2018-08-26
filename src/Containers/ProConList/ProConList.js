import React, { Component } from 'react';
import './ProConList.css';

class ProConList extends Component {
  state = {
    proVal: '',
    conVal: ''
  };

  handleListDelete = () => {
    let { removeAList, list } = this.props;
    removeAList(list.label);
  };

  render() {
    let { proVal, conVal } = this.state;
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
                <button className="addListItemBtn">+ Add a pro</button>
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
                <button className="addListItemBtn">+ Add a con</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProConList;
