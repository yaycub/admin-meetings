import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ name, value, onChange }) => {
  return (
    <label>
      {name}
      <input 
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
