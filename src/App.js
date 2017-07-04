import React, { Component } from 'react';
import './App.css';

const appComponent = Object.create(Component.prototype);

appComponent.render = function () {
  return (
    <div className="App">
    </div>
  );
};

const App = () => appComponent;

export default App;
