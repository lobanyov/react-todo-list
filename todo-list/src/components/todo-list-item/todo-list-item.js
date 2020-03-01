import React from 'react';

import './todo-list-item.scss';

const TodoListItem = (props) =>  {

  let classNames = 'todo-list-item';

  const { 
    description,
    important,
    done,
    onDeleted,
    onToggleImportant,
    onToggleDone,
  } = props;

  if (done) {
    classNames += ' done';
  }

  if (important) {
    classNames += ' important';
  }
  
  return (
    <span className={ classNames }>
      <span 
        className="todo-list-item-label"
        onClick={ onToggleDone }>
          { description }
      </span>

      <button 
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={ onToggleImportant }>
          <i className="fa fa-exclamation" />
      </button>

      <button 
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={ onDeleted }>
          <i className="fa fa-trash-o" />
      </button>
    </span>
  );
}

export default TodoListItem;
