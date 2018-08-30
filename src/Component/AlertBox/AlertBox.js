import React, { Component } from 'react';

import './AlertBox.css';

class AlertBox extends Component {
  render() {
    return (
      <div className="alertBackground">
        <div className="alertWrapper">
          <div className="alertBox">
            <p className="alertMsgText">Are you sure you want to continue ?</p>
            <div className="alertBtnContainer">
              <button className="alertConfirmBtn">
                <span role="img" aria-label="Yes">
                  👍
                </span>
              </button>
              <button className="alertDismissBtn">
                <span role="img" aria-label="No">
                  ❌
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AlertBox;
