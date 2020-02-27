import React, { Component } from 'react';

import './todo-list-item.scss';

class TodoListItem extends Component {

  state = {
    done: false,
  }

  onLabelClick = () => {
    
    const { done } = this.state;

    if (done) {
      this.setState({ done: false });
    } else {
      this.setState({ done: true });
    }
  }

  render() {
    // this.props - include all properties

    let classNames = 'todo-list-item';
    const { done } = this.state;

    const { description, important } = this.props;

    const style = {
      color: important ? 'coral' : 'black',
      fontWeight: important ? 'bold' : 'normal', 
    };

    if (done) {
      classNames += ' done';
    }
    
    return (
      <span className={ classNames }>
        <span 
          className="todo-list-item-label"
          style={style}
          onClick={ this.onLabelClick }>
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
