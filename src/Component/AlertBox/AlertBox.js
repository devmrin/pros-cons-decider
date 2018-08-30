import React, { Component } from 'react';

import './AlertBox.css';

class AlertBox extends Component {
  render() {
    let { show } = this.props;
    return (
      <div className={show ? 'alertBackground' : 'hideAlertBackground'}>
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
