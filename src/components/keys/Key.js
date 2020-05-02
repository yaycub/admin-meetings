import React from 'react';
import PropTypes from 'prop-types';

const Key = ({ title, id, onDelete }) => (
  <>
    <h3>{title}</h3>
    <div>
      <p>{id}</p>
      <button onClick={() => onDelete(id)}>🗑</button>
    </div>
  </>
);

Key.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Key;
