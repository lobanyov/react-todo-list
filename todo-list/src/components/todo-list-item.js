import React from 'react';

// const { description } = props;

const TodoListItem = ({ description, important }) => {
  
  const style = {
    color: important ? 'lightgreen' : 'black',
    fontWeight: important ? 'bold' : 'normal', 
  }

  return <span style={style}>{ description }</span>;
}

export default TodoListItem;
