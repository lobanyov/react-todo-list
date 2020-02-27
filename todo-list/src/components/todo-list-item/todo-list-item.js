import React from 'react';

import './todo-list-item.scss';

// const { description } = props;

const TodoListItem = ({ description, important }) => {
  
  const style = {
    color: important ? 'coral' : 'black',
    fontWeight: important ? 'bold' : 'normal', 
  }

  return (
    <span className="todo-list-item">
      <span 
        className="todo-list-item-label"
        style={style}>
          { description }
      </span>

      <button 
        type="button"
        className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
      </button>

      <button 
        type="button"
        className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
      </button>
    </span>
  );
}

export default TodoListItem;
