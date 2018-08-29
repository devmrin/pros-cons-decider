import React, { Component } from 'react';

import PencilIcon from '../../assets/icons/pencil-alt.svg';
import TrashIcon from '../../assets/icons/trash.svg';

import './ProConList.css';

class ProConList extends Component {
  state = {
    addingPro: false,
    proVal: '',
    addingCon: false,
    conVal: '',
    showLabelHeadingInput: false
  };

  componentDidMount() {
    this.setState({
      headingLabel: this.props.list.label
    });
  }

  onListLabelHeadingClick = () => {
    this.setState({
      showLabelHeadingInput: true
    });
    setTimeout(() => this.listLabelHeading.focus(), 0);
  };

  onHeadingLabelChange = e => {
    if (e.target.value.length > 40) {
      alert('Please keep the titles concise.');
    } else {
      this.props.changeListLabelHeading(this.props.list, e.target.value);
    }
  };

  submitLabelHeadingInput = e => {
    if (e.key === 'Enter') {
      this.setState({
        showLabelHeadingInput: false
      });
      this.listLabelHeading.blur();
    }
  };

  handleListHeadingInputBlur = () => {
    this.setState({
      showLabelHeadingInput: false
    });
    this.listLabelHeading.blur();
  };

  handleListDelete = () => {
    let { removeAList, list } = this.props;
    removeAList(list.label);
  };

  resetState = () => {
    this.setState({
      addingPro: false,
      proVal: '',
      addingCon: false,
      conVal: ''
    });
  };

  handleProConInputBlur = () => {
    this.resetState();
  };

  onAddProItemClick = e => {
    e.stopPropagation();
    this.setState({
      addingPro: true,
      addingCon: false
    });
    setTimeout(() => this.proInput.focus(), 300);
  };

  handleProInput = e => {
    this.setState({
      proVal: e.target.value
    });
    if (e.target.value.length > 120) {
      this.props.addProToList(this.props.list, this.state.proVal);
      alert('Please keep your points short.');
    }
  };

  onAddProItemInputSubmit = e => {
    if (e.key === 'Enter') {
      this.props.addProToList(this.props.list, this.state.proVal);
      this.setState({
        proVal: ''
      });
    }
  };

  onAddConItemClick = e => {
    e.stopPropagation();
    this.setState({
      addingCon: true,
      addingPro: false
    });
    setTimeout(() => this.conInput.focus(), 300);
  };

  handleConInput = e => {
    this.setState({
      conVal: e.target.value
    });
    if (e.target.value.length > 120) {
      this.props.addConToList(this.props.list, this.state.conVal);
      alert('Please keep your points short.');
    }
  };

  onAddConItemInputSubmit = e => {
    if (e.key === 'Enter') {
      this.props.addConToList(this.props.list, this.state.conVal);
      this.setState({
        conVal: ''
      });
    }
  };

  render() {
    let {
      proVal,
      conVal,
      addingCon,
      addingPro,
      showLabelHeadingInput
    } = this.state;
    let { list } = this.props;
    return (
      <div className="Column">
        <div className="prosConsWrapper">
          <h2 className="columnHeading">
            <span
              className="listLabelHeading"
              onClick={this.onListLabelHeadingClick}
            >
              {showLabelHeadingInput ? '' : list && list.label}
              <img
                src={PencilIcon}
                className={
                  showLabelHeadingInput
                    ? 'listHeadingPen hide'
                    : 'listHeadingPen'
                }
                alt="edit heading - pen icon"
              />
              <input
                type="text"
                ref={ref => (this.listLabelHeading = ref)}
                className={
                  showLabelHeadingInput
                    ? 'labelHeadingInput labelHeadingAppear'
                    : 'labelHeadingInput'
                }
                value={list.label}
                onChange={this.onHeadingLabelChange}
                onKeyPress={this.submitLabelHeadingInput}
                onBlur={this.handleListHeadingInputBlur}
              />
            </span>
            <button onClick={this.handleListDelete} className="listDelBtn">
              remove
            </button>
          </h2>
          <div className="prosContainer">
            <div className="proconsHeading">PROS</div>
            <ul>
              {list &&
                list.pros &&
                list.pros.map((pro, index) => (
                  <div className="proConListGroup" key={index}>
                    <li className="proConListItem">{pro}</li>
                    <button
                      className=".iconButtonGroup"
                      onClick={() =>
                        this.props.handleProItemDelete(list, pro, index)
                      }
                    >
                      <img
                        src={TrashIcon}
                        alt="trash-icon"
                        className="deleteItemIcon"
                      />
                    </button>
                  </div>
                ))}
              <li className="addListItem">
                <button
                  className={
                    addingPro ? 'addListItemBtn hideAddBtn' : 'addListItemBtn'
                  }
                  onClick={this.onAddProItemClick}
                >
                  + Add a pro
                </button>
                <input
                  type="text"
                  ref={ref => (this.proInput = ref)}
                  value={proVal}
                  onClick={e => e.stopPropagation()}
                  onChange={this.handleProInput}
                  onKeyPress={this.onAddProItemInputSubmit}
                  onBlur={this.handleProConInputBlur}
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
                list.cons.map((con, index) => (
                  <div className="proConListGroup" key={index}>
                    <li className="proConListItem">{con}</li>
                    <button
                      className=".iconButtonGroup"
                      onClick={() =>
                        this.props.handleConItemDelete(list, con, index)
                      }
                    >
                      <img
                        src={TrashIcon}
                        alt="trash-icon"
                        className="deleteItemIcon"
                      />
                    </button>
                  </div>
                ))}
              <li className="addListItem">
                <button
                  className={
                    addingCon ? 'addListItemBtn hideAddBtn' : 'addListItemBtn'
                  }
                  onClick={this.onAddConItemClick}
                >
                  + Add a con
                </button>
                <input
                  type="text"
                  ref={ref => (this.conInput = ref)}
                  value={conVal}
                  onClick={e => e.stopPropagation()}
                  onChange={this.handleConInput}
                  onKeyPress={this.onAddConItemInputSubmit}
                  onBlur={this.handleProConInputBlur}
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
