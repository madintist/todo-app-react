import React from 'react';
import PageHeader from './PageHeader';
import TodoList from './TodoList';
import './Todo.css';

class Todo extends React.Component {
  constructor () {
    super();

    this.state = {
      headerText: 'Todo List'
    };
  }

  render () {
    return (
      <div className="todo-container">
        <PageHeader headerText={this.state.headerText} />
        <TodoList />
      </div>
    );
  }
}

export default Todo;
