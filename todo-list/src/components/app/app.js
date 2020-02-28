import React, { Component } from 'react';

import './app.scss';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

// const App = () => {

//   const todoData = [
//     { description: '11-00-AM Meeting', important: true, key: '_QFY_23' },
//     { description: '13-00-PM Lunch', important: false, key: '_TNY_41' },
//     { description: '15-00-PM Code review', important: true, key: '_MVB_19' },
//     { description: '17-00-PM React + Redux', important: false, key: '_KZX_17' }
//   ];

//   const onDeleted = (key) => console.log('Deleted: ', key);

//   return (
//     <div className="todo-app">
//       <AppHeader toDo={1} done={3}/>
//       <div className="top-panel d-flex">
//         <SearchPanel />
//         <ItemStatusFilter />
//       </div>

//       <TodoList 
//         todos={todoData}
//         onDeleted={onDeleted} /> 
//     </div>
//   );
// }

class App extends Component {

  state = {
    todoData: [
      { description: '11-00-AM Meeting', important: true, key: '_QFY_23' },
      { description: '13-00-PM Lunch', important: false, key: '_TNY_41' },
      { description: '15-00-PM Code review', important: true, key: '_MVB_19' },
      { description: '17-00-PM React + Redux', important: false, key: '_KZX_17' }
    ]
  }

  deleteItem = (key) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex(item => item.key === key);
      
      const partBeforeIndex = todoData.slice(0, index);
      const partAfterIndex = todoData.slice(index + 1);

      const newTodoData = [...partBeforeIndex, ...partAfterIndex];

      return {
        todoData: newTodoData,
      };
    });
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3}/>
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList 
          todos={this.state.todoData}
          onDeleted={this.deleteItem} /> 
      </div>
    );
  }
}

export default App;
