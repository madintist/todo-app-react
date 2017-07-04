import React from 'react';
import './PageHeader.css';

function PageHeader (props) {
  return (
    <h1>{props.headerText}</h1>
  );
}

export default PageHeader;
