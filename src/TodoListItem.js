import React, { Component } from 'react';
import './TodoListItem.css';

const todoListItemComponent = Object.create(Component.prototype);

todoListItemComponent.render = function (props) {
  return (
    <li>
      {props.todoItem.title}
      {/* Complete button here */}
    </li>
  );
};

const TodoListItem = () => todoListItemComponent;

export default TodoListItem;
