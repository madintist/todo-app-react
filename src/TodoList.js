import React, { Component } from 'react';
import './TodoList.css';

const todoListComponent = Object.create(Component.prototype);

todoListComponent.render = function () {
  return (
    <ul>
      {/* Todo list items here */}
    </ul>
  );
};

const TodoList = () => todoListComponent;

export default TodoList;
