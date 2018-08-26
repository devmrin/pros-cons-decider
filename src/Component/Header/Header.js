import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  state = {
    showInput: false,
    labelInput: ''
  };

  onAddButtonClick = () => {
    this.setState(
      {
        showInput: true
      },
      () => {
        setTimeout(() => this.labelInputRef.focus(), 300); //300 is 100ms over transition time
      }
    );
  };

  handleLabelInput = e => {
    this.setState({
      labelInput: e.target.value
    });
    // console.log(e.target);
  };

  handleLabelSubmit = e => {
    if (e.key === 'Enter') {
      this.setState({
        showInput: false,
        labelInput: ''
      });
    }
  };

  render() {
    let { showInput, labelInput } = this.state;
    return (
      <div className="headerContainer">
        <input
          ref={ref => (this.labelInputRef = ref)}
          className={showInput ? 'labelInput inputAppear' : 'labelInput'}
          type="text"
          value={labelInput}
          name="listLabel"
          id="listLabel"
          onChange={this.handleLabelInput}
          onKeyPress={this.handleLabelSubmit}
        />
        <button
          className={showInput ? 'addButton hide' : 'addButton'}
          onClick={this.onAddButtonClick}
        >
          <i className="fas fa-plus plusIcon" />
        </button>
      </div>
    );
  }
}

export default Header;
