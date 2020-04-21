const postApi = (apiKey, data) => {
  const options = {
    method: 'POST',
    headers: {
      'X-API-KEY': apiKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  return fetch('https://alchemy-automation.herokuapp.com/api/v1/keys', options)
    .then(key => key.json());
};

export default postApi;
