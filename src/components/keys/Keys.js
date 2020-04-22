import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getKeys from '../../services/getKeys';
import Key from './Key';
import deleteKey from '../../services/deleteKey';

const Keys = ({ apiKey, createdApi }) => {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    getKeys(apiKey)
      .then(setKeys);
  }, [createdApi]);

  const onDelete = ({ target }) => {
    const confirmDelete = confirm(`Are you sure you want to delete ${target.value}`);

    if(confirmDelete){
      deleteKey(apiKey, target.value)
        .then(deletedKey => {
          setKeys(state => state.filter(key => key.id !== deletedKey.id));
        });
    }
  };

  const keyElements = keys.map(({ title, id }) => {
    return (
      <li key={id}>
        <Key title={title}id={id}onDelete={onDelete} />
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
  apiKey: PropTypes.string.isRequired,
  createdApi: PropTypes.object.isRequired
};

export default Keys;
