import React, { Component } from 'react';
import './CompleteItemButton.css';

const completeItemButtonComponent = Object.create(Component.prototype);

completeItemButtonComponent.render = function () {
  return (
    <button onClick={/* complete item */}>
      <i class="fa fa-check" aria-hidden="true"></i>
    </button>
  );
};

const CompleteItemButton = () => completeItemButtonComponent;

export default CompleteItemButton;
