import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = () => {
  return (
    <ul>
      <li><TodoListItem description="[SDLRF-4574]" /></li>
      <li><TodoListItem 
        description="[SDLRF-6055]"
        important={true} /></li>
    </ul>
  );
}

export default TodoList;