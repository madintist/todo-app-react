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

  completeItem (id) {
    this.setState(function (previousState, props) {
      console.log('Previous State:', previousState);
      console.log('Props:', props);
    });
  }

  render () {
    const incompleteItems = this.state.todoItems.filter(function (item) {
      return !item.complete;
    });
    const itemList = incompleteItems.map(function (item) {
      return <TodoListItem
      key={item.id}
      item={item}
      onClick={id => this.completeItem(id)}
        />;
    });

    return (
      <ul>
        {itemList}
      </ul>
    );
  }
}

export default TodoList;
