import React, { Component } from 'react';
import Todo from './Todo';
import './App.css';

const appComponent = Object.create(Component.prototype);

appComponent.render = function () {
  return (
    <div className="App">
      <Todo />
    </div>
  );
};

const App = () => appComponent;

export default App;
