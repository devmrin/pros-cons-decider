import React, { Component } from 'react';

import PlusIcon from '../../assets/icons/plus.svg';
import './Header.css';

class Header extends Component {
  state = {
    showInput: false,
    labelInput: ''
  };

  onAddButtonClick = () => {
    let { showInput } = this.state;
    if (showInput) {
      this.setState({ showInput: false });
    } else {
      this.setState({ showInput: true }, () => {
        setTimeout(() => this.labelInputRef.focus(), 300); //300 is 100ms over transition time
      });
    }
  };

  handleLabelInput = e => {
    this.setState({
      labelInput: e.target.value
    });
    // console.log(e.target);
  };

  handleLabelSubmit = e => {
    if (e.key === 'Enter') {
      this.props.createNewList(this.state.labelInput);
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
        <div className="headerInputAddContainer">
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
            className={showInput ? 'addButton rotate' : 'addButton'}
            onClick={this.onAddButtonClick}
          >
            <img
              className=" headerPlusIcon"
              src={PlusIcon}
              alt="create new list - plus icon"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
