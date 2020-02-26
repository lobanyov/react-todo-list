import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {

  const todoData = [
    { description: '11-00-AM Meeting', important: true },
    { description: '13-00-PM Lunch', important: false },
    { description: '15-00-PM Code review', important: true },
    { description: '17-00-PM Learning React + Redux', important: false }
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
