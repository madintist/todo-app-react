import React, { Component } from 'react';
import CompleteItemButton from './CompleteItemButton';
import './TodoListItem.css';

const todoListItemComponent = Object.create(Component.prototype);

todoListItemComponent.render = function (props) {
  return (
    <li>
      {this.props.todoTitle}
      <CompleteItemButton targetItem={this.props.key} />
    </li>
  );
};

const TodoListItem = () => todoListItemComponent;

export default TodoListItem;
