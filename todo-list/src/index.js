import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import AppHeader from './components/app-header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';
import ItemStatusFilter from './components/item-status-filter/item-status-filter';

const App = () => {

  const todoData = [
    { description: '11-00-AM Meeting', important: true, key: '_QFY_23' },
    { description: '13-00-PM Lunch', important: false, key: '_TNY_41' },
    { description: '15-00-PM Code review', important: true, key: '_MVB_19' },
    { description: '17-00-PM React + Redux', important: false, key: '_KZX_17' }
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3}/>
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} /> 
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
