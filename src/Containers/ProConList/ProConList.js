import React, { Component } from 'react';
import './ProConList.css';

class ProConList extends Component {
  render() {
    let { list } = this.props;
    return (
      <div className="Column">
        <div className="prosConsWrapper">
          <h2 className="columnHeading">
            {list && list.label} <i className="fas fa-pen pencilIcon" />
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

export default ProConList;
