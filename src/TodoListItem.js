import React from 'react';
import CompleteItemButton from './CompleteItemButton';
import './TodoListItem.css';

function TodoListItem (props) {
  return (
    <li>
      {props.item.title}
      <CompleteItemButton target={props.item.id} />
    </li>
  );
}

export default TodoListItem;
