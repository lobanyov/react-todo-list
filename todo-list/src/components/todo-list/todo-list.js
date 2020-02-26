import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.scss';

const TodoList = ({ todos }) => {

  const items = todos.map((item) => {

    const { description, important, key } = item;

    return (
      <li key={key} className="list-group-item">
        <TodoListItem
          description={ description }
          important={ important }
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