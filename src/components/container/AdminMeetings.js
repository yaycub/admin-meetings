import React from 'react';
import Form from '../form/Form';
import Keys from '../keys/Keys';
import { useKeys, useApiKey, useMeetings } from '../../hooks/hooks';
import styles from './AdminMeeting.css';

const AdminMeeting = () => {
  const { apiKey, setApiKey, clearApiKey } = useApiKey();
  const { keys, onCreate, onDelete } = useKeys(apiKey);
  const { meetings } = useMeetings(apiKey);
  
  if(!apiKey) return (<input type='text' onChange={({ target }) => setApiKey(target.value)} placeholder='API_KEY' />);

  return (
    <>
      <button onClick={clearApiKey}>Clear API Key</button>
      <div className={styles.container}>
        <Keys keys={keys} onDelete={onDelete} />
        <Form 
          meetings={meetings} 
          createKey={onCreate}
        />
      </div>
    </>
  );
};

export default AdminMeeting;
