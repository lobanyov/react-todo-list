import React, { Component } from 'react';

import './search-panel.scss';

export default class SearchPanel extends Component {

  state = {
    description: ''
  }

  setDescription = (e) => {
    this.setState({
      description: e.target.value
    });
  }

  render() {
    const { description } = this.state;
    const { onSearch } = this.props;
    onSearch(description);

    return (
      <input 
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        value={ description }
        onChange = { this.setDescription } />
    );
  }
}
