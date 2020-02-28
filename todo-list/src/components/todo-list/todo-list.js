import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.scss';

const TodoList = ({ 
  todos, 
  onDeleted,
  onToggleImportant,
  onToggleDone,
}) => {

  const items = todos.map((item) => {

    const { description, important, key } = item;

    return (
      <li key={key} className="list-group-item">
        <TodoListItem
          description={ description }
          important={ important }
          onDeleted={ () => onDeleted(key) }
          onToggleDone={ () => onToggleDone(key) }
          onToggleImportant={ () => onToggleImportant(key) }
        />
      </li>
    );
  }); 

  return (
    <ul className="list-group todo-list">
      { items }
    </ul>
  );
}

export default TodoList; 