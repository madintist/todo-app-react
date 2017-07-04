import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

const todoListComponent = Object.create(Component.prototype);

todoListComponent.state = {
  todoItems: [
    {
      id: 0,
      title: 'Item 1',
      complete: false
    },
    {
      id: 1,
      title: 'Item 2',
      complete: false
    },
    {
      id: 2,
      title: 'Item 3',
      complete: false
    },
    {
      id: 3,
      title: 'Item 4',
      complete: false
    }
  ]
};

todoListComponent.incompleteItems = todoListComponent.state.todoItems.map(function (item) {
  return <TodoListItem key={item.id} todoItem={item} />;
});

todoListComponent.render = function () {
  return (
    <ul>
      {this.incompleteItems}
    </ul>
  );
};

const TodoList = () => todoListComponent;

export default TodoList;
