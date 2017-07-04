import React, { Component } from 'react';
import CompleteItemButton from './CompleteItemButton';
import './TodoListItem.css';

const todoListItemComponent = Object.create(Component.prototype);

todoListItemComponent.render = function (props) {
  return (
    <li>
      {this.props.todoItem.title}
      <CompleteItemButton targetItem={this.props.todoItem.id} />
    </li>
  );
};

const TodoListItem = () => todoListItemComponent;

export default TodoListItem;
