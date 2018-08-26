import React, { Component, Fragment } from 'react';
import './Header.css';

class Header extends Component {
  state = {
    showInput: false,
    labelInput: ''
  };

  onAddButtonClick = () => {
    this.setState({
      showInput: true
    });
  };

  handleLabelInput = e => {
    this.setState({
      labelInput: e.target.value
    });
  };

  handleLabelSubmit = e => {
    e.preventDefault();
    console.log(e.target.keyCode);
  };

  render() {
    let { showInput, labelInput } = this.state;
    return (
      <div className="headerContainer">
        {showInput ? (
          <input
            className="labelInput inputAppear"
            type="text"
            value={labelInput}
            name="listLabel"
            id="listLabel"
            onChange={this.handleLabelInput}
            onKeyUp={this.handleLabelSubmit}
          />
        ) : (
          <Fragment>
            <input
              className="labelInput"
              type="text"
              name="listLabel"
              id="listLabel"
            />
            <button className="addButton" onClick={this.onAddButtonClick}>
              <i className="fas fa-plus plusIcon" />
            </button>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Header;
