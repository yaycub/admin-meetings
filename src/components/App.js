import React from 'react';
import AdminMeeting from './container/AdminMeetings';
import styles from './form/Form.css';

export default function App() {
  return (
    <>
      <h1 className={styles.header}>Alchemeetings Admin</h1>
      <AdminMeeting />
    </>
  );
}
  
