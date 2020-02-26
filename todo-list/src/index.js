import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';

const App = () => {

  const todoData = [
    { description: '11-00-AM Meeting', important: true, key: '_QFY_23' },
    { description: '13-00-PM Lunch', important: false, key: '_TNY_41' },
    { description: '15-00-PM Code review', important: true, key: '_MVB_19' },
    { description: '17-00-PM Learning React + Redux', important: false, key: '_KZX_17' }
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
