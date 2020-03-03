import React, { Component } from 'react';

import './item-add-form.scss';

export default class ItemAddForm extends Component {

  state = {
    description: ''
  }

  changeDescription = (e) => {
    this.setState({
      description: e.target.value
    });
  }

  clearDescription = () => {
    this.setState({
      description: ''
    });
  };

  render() {
    const { onAdded } = this.props;
    const { description } = this.state;

    return (
      <div className="item-add-form d-flex">
        <input type="text"
               value={ description }
               className="form-control"
               onChange={ this.changeDescription }
               placeholder="What needs to be done" />
        <button 
          className="btn btn-outline-secondary"
          onClick={ () => { onAdded(description); this.clearDescription() }  } >
            Add Item
        </button>
      </div>
    );
  }
}