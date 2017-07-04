import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

class TodoList extends React.Component {
  constructor () {
    super();

    this.state = {
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
  }

  incompleteItems () {
    return this.state.todoItems.map(function (item) {
      return <TodoListItem key={item.id} todoTitle={item.title} />;
    });
  }

  render () {
    return (
      <ul>
        {this.incompleteItems}
      </ul>
    );
  }
}

export default TodoList;
