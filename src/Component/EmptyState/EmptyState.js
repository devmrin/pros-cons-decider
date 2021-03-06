import React from 'react';
import './EmptyState.css';

import PlusIcon from '../../assets/icons/plus.svg';
import NoList from '../../assets/images/NoLists.svg';

const EmptyState = () => (
  <div className="EmptyStateContainer">
    <h1 className="emptyHeading">wow! so quiet...</h1>
    <img src={NoList} alt="no-lists" />
    <h2 className="instructionHeading">
      Click the "{' '}
      <img className="instructionPlusIcon" src={PlusIcon} alt="plus-icon" /> "
      icon on the <span className="instructionBoldText"> top-right </span> to
      create a new <span className="instructionBoldText">pros & cons</span>{' '}
      list.
      <br />
      You can view up to 4 lists simultaneously.
    </h2>
  </div>
);

export default EmptyState;
