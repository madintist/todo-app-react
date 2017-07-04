import React, { Component } from 'react';
import PageHeader from './PageHeader';
import './Todo.css';

const Todo = Object.create(Component.prototype);

Todo.state = {
  headerText: 'Todo List'
};

Todo.render = function () {
  return (
    <div className="todo-container">
      <PageHeader headerText={this.state.headerText} />
      {/* Todo list here */}
    </div>
  );
};

export default () => Todo;
