import React, { Component } from 'react';
import PageHeader from './PageHeader';
import TodoList from './TodoList';
import './Todo.css';

const todoComponent = Object.create(Component.prototype);

todoComponent.state = {
  headerText: 'Todo List'
};

todoComponent.render = function () {
  return (
    <div className="todo-container">
      <PageHeader headerText={this.state.headerText} />
      <ul>
        <TodoList />
      </ul>
    </div>
  );
};

const Todo = () => todoComponent;

export default Todo;
