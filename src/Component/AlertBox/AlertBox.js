import React, { Component } from 'react';

import './AlertBox.css';

class AlertBox extends Component {
  render() {
    let { show, msg, hideBtnGroup, onSubmit, onDismiss } = this.props;
    return (
      <div
        className={show ? 'alertBackground' : 'hideAlertBackground'}
        onClick={onDismiss}
      >
        <div className="alertWrapper">
          <div className="alertBox" onClick={e => e.stopPropagation()}>
            <p className="alertMsgText">{msg}</p>
            {hideBtnGroup ? null : (
              <div className="alertBtnContainer">
                <button className="alertConfirmBtn" onClick={onSubmit}>
                  <span role="img" aria-label="Yes">
                    👍
                  </span>
                </button>
                <button className="alertDismissBtn" onClick={onDismiss}>
                  <span role="img" aria-label="No">
                    ❌
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AlertBox;
