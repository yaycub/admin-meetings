const getKeys = apiKey => {
  const options = {
    headers: {
      'X-API-KEY': apiKey
    }
  };

  return fetch('https://alchemy-automation.herokuapp.com/api/v1/keys/', options)
    .then(keys => keys.json());
};

export default getKeys;
