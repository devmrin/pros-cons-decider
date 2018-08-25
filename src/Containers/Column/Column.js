import React, { Component } from 'react';
import './Column.css';

class Column extends Component {
  render() {
    let { list } = this.props;
    return (
      <div className="Column">
        <div className="prosConsWrapper">
          <h2 className="columnHeading">
            {list && list.label} <i class="fas fa-pen icon" />
          </h2>
          <div className="prosContainer">
            <div className="proconsHeading">PROS</div>
            <ul>{list && list.pros && list.pros.map(pro => <li>{pro}</li>)}</ul>
          </div>
          <div className="divider" />
          <div className="consContainer">
            <div className="proconsHeading">CONS</div>
            <ul>
              <ul>
                {list && list.cons && list.cons.map(con => <li>{con}</li>)}
              </ul>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Column;
