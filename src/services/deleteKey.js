const deleteKey = (apiKey, id) => {
  const options = {
    method: 'DELETE',
    headers: {
      'X-API-KEY': apiKey
    }
  };

  return fetch(`https://alchemy-automation.herokuapp.com/api/v1/keys/${id}`, options)
    .then(deletedKey => deletedKey.json());
};

export default deleteKey;
