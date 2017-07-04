import React from 'react';
import CompleteItemButton from './CompleteItemButton';
import './TodoListItem.css';

function TodoListItem (props) {
  return (
    <li>
      {props.title}
      <CompleteItemButton target={props.key} />
    </li>
  );
}

export default TodoListItem;
