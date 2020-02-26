import React from 'react';

import './todo-list-item.scss';

// const { description } = props;

const TodoListItem = ({ description, important }) => {
  
  const style = {
    color: important ? 'coral' : 'black',
    fontWeight: important ? 'bold' : 'normal', 
  }

  return <span className="todo-list-item" style={style}>{ description }</span>;
}

export default TodoListItem;
