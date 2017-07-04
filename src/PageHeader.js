import React, { Component } from 'react';
import './PageHeader.css';

const PageHeader = Object.create(Component.prototype);

PageHeader.render = function (props) {
  return (
      <h1>{ props.headerText }</h1>
  );
};

export default () => PageHeader;
