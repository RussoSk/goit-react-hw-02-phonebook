
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
    render() {
      const { filter, onChange } = this.props;
  
      return (
        <label>
          Filter by name:
          <input type="text" value={filter} onChange={onChange} />
        </label>
      );
    }
  }
  
  Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  