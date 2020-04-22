import React, { useState, useEffect } from 'react';
import Form from '../form/Form';
import getMeetings from '../../services/getMeetings';
import Keys from '../keys/Keys';

const AdminMeeting = () => {
  const [meetings, setMeetings] = useState([]);
  const [selectedMeetings, setSelectedMeetings] = useState({});
  const [apiKey, setApiKey] = useState();
  

  useEffect(() => {
    if(apiKey){
      getMeetings(apiKey)
        .then(setMeetings);
    }
    
    const apiKeyStorage = localStorage.getItem('API_KEY');
    if(apiKeyStorage) setApiKey(apiKeyStorage);
  }, [apiKey]);

  const apiKeyChangeHandler = ({ target }) => {
    localStorage.setItem('API_KEY', target.value);
    setApiKey(target.value);
  };

  const clearApiKey = () => {
    localStorage.removeItem('API_KEY');
    setApiKey(null);
  };  

  if(!apiKey) return (<input type='text' onChange={apiKeyChangeHandler} placeholder='API_KEY' />);

  return (
    <>
      <button onClick={clearApiKey}>Clear API Key</button>
      <div>
        <Keys apiKey={apiKey} />
        <Form 
          apiKey={apiKey} 
          meetings={meetings} 
          selectedMeetings={selectedMeetings}
          setSelectedMeetings={setSelectedMeetings}
          setApiKey={setApiKey}
        />
      </div>
      
    </>
  );
};

export default AdminMeeting;
