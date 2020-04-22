import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getKeys from '../../services/getKeys';
import Key from './Key';

const Keys = ({ apiKey }) => {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    getKeys(apiKey)
      .then(setKeys);
  }, []);

  const onDelete = ({ target }) => {
    console.log(target.value);
  };

  const keyElements = keys.map(({ title, id }) => {
    return (
      <li key={id}>
        <Key 
          title={title}
          id={id}
          onDelete={onDelete}
        />
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
  apiKey: PropTypes.string.isRequired
};

export default Keys;
