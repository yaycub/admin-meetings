import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import postApi from '../../services/postApi';
import styles from './Form.css';

const Form = ({ meetings, setSelectedMeetings, selectedMeetings, apiKey, setApiKey }) => {
  const [admin, setAdmin] = useState(false);
  const [createdApi, setCreatedApi] = useState();
  const [groupName, setGroupName] = useState('Group Name');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedMeetingsArr = Object.keys(selectedMeetings).filter(meetingKey => { if(selectedMeetings[meetingKey]) return meetingKey; });

    const data = {
      title: groupName,
      meetingIds: selectedMeetingsArr,
      admin
    };

    postApi(apiKey, data)
      .then(setCreatedApi);
  };

  const adminChange = () => {
    setAdmin(state => !state);
  };

  const onMeetingChange = ({ target }) => {
    const { value, checked } = target;
    setSelectedMeetings(state => ({ ...state, [value]: checked }));
  };

  const changeGroupName = ({ target }) => {
    setGroupName(target.value);
  };

  const checkboxes = meetings.filter(meeting => { if(meeting.type === 4) return meeting; })
    .map(({ name, zoomId }, i) => {
      return (
        <Checkbox name={name} value={zoomId} onChange={onMeetingChange} key={i} />
      );
    });

  const clearApiKey = () => {
    localStorage.removeItem('API_KEY');
    setApiKey(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles}>
        <button onClick={clearApiKey}>Clear API Key</button>
        <input type='text' value={groupName} onChange={changeGroupName} />
        {checkboxes}
        <label>
      Admin?
          <input type="checkbox" value='admin' onChange={adminChange} />
        </label>
      
        <button>Create Key</button>
      </form>
      <p>
        {JSON.stringify(createdApi)}
      </p>
    </>
  );
};

Form.propTypes = {
  meetings: PropTypes.array.isRequired,
  selectedMeetings: PropTypes.object.isRequired,
  setSelectedMeetings: PropTypes.func.isRequired,
  setApiKey: PropTypes.func.isRequired,
  apiKey: PropTypes.string.isRequired
};

export default Form;
