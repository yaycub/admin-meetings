export default function getMeetings(apiKey){
  const options = {
    headers: {
      'X-API-KEY': apiKey
    }
  };

  return fetch('https://alchemy-automation.herokuapp.com/api/v1/meetings', options)
    .then(meetings => meetings.json());
}
