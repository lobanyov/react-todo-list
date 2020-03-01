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

    const { description, important, done, key } = item;

    return (
      <li key={key} className="list-group-item">
        <TodoListItem
          description={ description }
          important={ important }
          done={ done }
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