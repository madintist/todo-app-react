import React, { Component } from 'react';
import './Todo.css';

const Todo = Object.create(Component.prototype);

Todo.state = {
  headerText: 'Todo List'
};

Todo.render = function () {
  return (
    <div className="todo-container">
      {/* Page header here */}
      {/* Todo list here */}
    </div>
  );
};

export default () => Todo;
