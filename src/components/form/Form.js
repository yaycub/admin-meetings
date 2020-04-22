import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import postApi from '../../services/postApi';
import styles from './Form.css';

const Form = ({ meetings, setSelectedMeetings, selectedMeetings, apiKey, createdApi, setCreatedApi }) => {
  const [admin, setAdmin] = useState(false);
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

  const checkboxes = meetings.filter(meeting => { if(meeting.type === 4 || meeting.type === 8) return meeting; })
    .map(({ name, zoomId }, i) => {
      return (
        <Checkbox name={name} value={zoomId} onChange={onMeetingChange} key={i} />
      );
    });

  return (
    <>
      <form onSubmit={handleSubmit} className={styles}>
        <input type='text' value={groupName} onChange={changeGroupName} className={styles.groupName} />
        <div>
          {checkboxes}
        </div>
        <label className={styles.admin}>
      Admin?
          <input type="checkbox" value='admin' onChange={adminChange} />
        </label>
      
        <button>Create Key</button>
      </form>
      <p>
        {createdApi.id ? 'Your API Key: ' + createdApi.id : ''}
      </p>
    </>
  );
};

Form.propTypes = {
  meetings: PropTypes.array.isRequired,
  selectedMeetings: PropTypes.object.isRequired,
  setSelectedMeetings: PropTypes.func.isRequired,
  apiKey: PropTypes.string.isRequired,
  createdApi: PropTypes.object.isRequired,
  setCreatedApi: PropTypes.func.isRequired
};

export default Form;
