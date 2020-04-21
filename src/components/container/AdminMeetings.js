import React, { useState, useEffect } from 'react';
import Form from '../form/Form';
import getMeetings from '../../services/getMeetings';

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

  

  if(!apiKey) return (<input type='text' onChange={apiKeyChangeHandler} placeholder='API_KEY' />);

  return (
    <>
      <Form 
        apiKey={apiKey} 
        meetings={meetings} 
        selectedMeetings={selectedMeetings}
        setSelectedMeetings={setSelectedMeetings}
        setApiKey={setApiKey}
      />
    </>
  );
};

export default AdminMeeting;
