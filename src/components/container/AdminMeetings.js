import React, { useState, useEffect } from 'react';
import Form from '../form/Form';
import getMeetings from '../../services/getMeetings';
import Keys from '../keys/Keys';
import styles from './AdminMeeting.css';
import { useApiKey } from '../../hooks/hooks';

const AdminMeeting = () => {
  const { apiKey, setApiKey, clearApiKey } = useApiKey();
  const [meetings, setMeetings] = useState([]);
  const [selectedMeetings, setSelectedMeetings] = useState({});
  const [createdApi, setCreatedApi] = useState({
    id: null
  });
  

  useEffect(() => {
    if(apiKey){
      getMeetings(apiKey)
        .then(setMeetings);
    }
  }, [apiKey]);

  const apiKeyChangeHandler = ({ target }) => {
    localStorage.setItem('API_KEY', target.value);
    setApiKey(target.value);
  };  

  if(!apiKey) return (<input type='text' onChange={apiKeyChangeHandler} placeholder='API_KEY' />);

  return (
    <>
      <button onClick={clearApiKey}>Clear API Key</button>
      <div className={styles.container}>
        <Keys apiKey={apiKey} createdApi={createdApi} />
        <Form 
          apiKey={apiKey} 
          meetings={meetings} 
          selectedMeetings={selectedMeetings}
          setSelectedMeetings={setSelectedMeetings}
          setApiKey={setApiKey}
          createdApi={createdApi}
          setCreatedApi={setCreatedApi}
        />
      </div>
    </>
  );
};

export default AdminMeeting;
