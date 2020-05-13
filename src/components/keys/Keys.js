import React from 'react';
import PropTypes from 'prop-types';
import Key from './Key';

const Keys = ({ keys, onDelete }) => {
  const keyElements = keys.map(({ title, id }) => {
    return (
      <li key={id}>
        <Key title={title} id={id} onDelete={onDelete} />
      </li>
    );
  });
  
  return (
    <ul>
      <h2>Available Keys:</h2>
      {keyElements}
    </ul>
  );
};

Keys.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Keys;
