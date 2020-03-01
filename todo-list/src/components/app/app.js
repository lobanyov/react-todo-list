import React, { Component } from 'react';

import './app.scss';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

class App extends Component {

  state = {
    todoData: [
      // this.createTodoItem('Any task', '_MVQ_20_')
    ]
  }

  createTodoItem(description, key) {
    return {
      description: description,
      important: false,
      done: false,
      key: key,
    }
  }

  updateTodoData = (data, key, propName) => {
    const index = data.findIndex(item => item.key === key);

    const partBeforeIndex = data.slice(0, index);
    const partAfterIndex = data.slice(index + 1);

    const oldItem = data[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [
      ...partBeforeIndex,
      newItem,
      ...partAfterIndex
    ];
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

  addItem = () => {
    this.setState(({ todoData }) => {
      const key = '_MZF_' + (Math.trunc(Math.random().toFixed(2) * 100));

      console.log(key);

      const newTodoData = [
        ...todoData,
        {
          description: 'Any task',
          important: false,
          done: false,
          key: key,
        }
      ];

      return {
        todoData: newTodoData,
      }
    });
  }

  setItemAsImportant = (key) => {
    this.setState(({ todoData }) => {

      return {
        todoData: this.updateTodoData(todoData, key, 'important')
      }
    });
  }

  setItemAsDone = (key) => {
    this.setState(({ todoData }) => {
      
      return {
        todoData: this.updateTodoData(todoData, key, 'done')
      }
    });
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader todos={ this.state.todoData } />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList 
          todos={ this.state.todoData }
          onDeleted={ this.deleteItem }
          onToggleImportant={ this.setItemAsImportant }
          onToggleDone={ this.setItemAsDone } />

        <ItemAddForm onAdded={this.addItem} /> 
      </div>
    );
  }
}

export default App;
