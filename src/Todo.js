import React, { Component } from 'react';
import './Todo.css';

const todoComponent = Object.create(Component.prototype);

todoComponent.render = function () {
  return (
    <div className="todo-container">
      {/* Page header here */}
      {/* Todo list here */}
    </div>
  );
};

const Todo = () => todoComponent;

export default Todo;
