import React, { Component } from 'react';
import './PageHeader.css';

const pageHeaderComponent = Object.create(Component.prototype);

pageHeaderComponent.render = function (props) {
  return (
      <h1>{this.props.headerText}</h1>
  );
};

const PageHeader = () => pageHeaderComponent;

export default PageHeader;
