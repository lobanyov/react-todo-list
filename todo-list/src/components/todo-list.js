import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {

  const items = todos.map((item) => {

    const { description, important } = item;

    return (
      <li>
        <TodoListItem 
          description={ description }
          important={ important }
        />
      </li>
    );
  }); 

  return (
    <ul>
      { items }
    </ul>
  );
}

export default TodoList; 