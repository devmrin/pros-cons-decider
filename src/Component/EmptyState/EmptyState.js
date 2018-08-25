import React from 'react';
import './EmptyState.css';

import NoList from '../../assets/images/NoLists.svg';

const EmptyState = () => (
  <div className="EmptyStateContainer">
    <h1 className="emptyHeading">so quiet...</h1>
    <img src={NoList} alt="no-lists" />
    <h2 className="instructionHeading">
      Click on the " <i className="fas fa-plus" /> " icon on the top-right to
      create a new list.
    </h2>
  </div>
);

export default EmptyState;
