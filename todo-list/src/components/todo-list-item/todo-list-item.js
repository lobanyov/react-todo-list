import React, { Component } from 'react';

import './todo-list-item.scss';

class TodoListItem extends Component {

  state = {
    done: false,
    important: false,
  }

  markTaskAsImportant = () => {

    /*------------------------------------------*/
    /*--- this.setState - is an async method ---*/
    /*------------------------------------------*/

    // const { important } = this.state;

    // if (!important) {
    //   this.setState({
    //     important: true,
    //   });
    // } else {
    //   this.setState({
    //     important: false,
    //   });
    // }

    this.setState(({ important }) => {
      return {
        important: !important,
      }
    });
  }

  markTaskAsDone = () => {
    
    this.setState(({ done }) => {
      return {
        done: !done,
      }
    });
  }

  render() {
    // this.props - include all properties

    let classNames = 'todo-list-item';

    const { done, important } = this.state;
    const { description, onDeleted } = this.props;

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
          onClick={ this.markTaskAsDone }>
            { description }
        </span>

        <button 
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={ this.markTaskAsImportant }>
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
}

// const { description } = props;

// const TodoListItem = ({ description, important }) => {
  
//   const style = {
//     color: important ? 'coral' : 'black',
//     fontWeight: important ? 'bold' : 'normal', 
//   }

//   return (
//     <span className="todo-list-item">
//       <span 
//         className="todo-list-item-label"
//         style={style}>
//           { description }
//       </span>

//       <button 
//         type="button"
//         className="btn btn-outline-success btn-sm float-right">
//           <i className="fa fa-exclamation" />
//       </button>

//       <button 
//         type="button"
//         className="btn btn-outline-danger btn-sm float-right">
//           <i className="fa fa-trash-o" />
//       </button>
//     </span>
//   );
// }

export default TodoListItem;
