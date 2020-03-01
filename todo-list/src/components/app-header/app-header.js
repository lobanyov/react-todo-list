import React from 'react';

import './app-header.scss';

const AppHeader = ({ todos }) => {

  const doneItems = todos.filter((item) => item.done).length;
  const unfinishedItems = todos.length - doneItems;

  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>{ unfinishedItems } more to do, { doneItems } done</h2>
    </div>
  );
}

export default AppHeader;