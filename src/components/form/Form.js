import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import styles from './Form.css';

// eslint-disable-next-line react/prop-types
const MeetingCheckboxes = ({ meetings, onMeetingChange }) => {
  // eslint-disable-next-line react/prop-types
  const checkboxes = meetings.filter(meeting => meeting.type === 4 || meeting.type === 8)
    .map(({ name, zoomId }, i) => {
      return (
        <Checkbox name={name} value={zoomId} onChange={onMeetingChange} key={i} />
      );
    });

  return (
    <>
      {checkboxes}
    </>
  );
};

const Form = ({ meetings, createKey }) => {
  const [admin, setAdmin] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [selectedMeetings, setSelectedMeetings] = useState([]);
  const [createdKey, setCreatedKey] = useState(null);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedMeetingIds = Object.keys(selectedMeetings).filter(key => selectedMeetings[key]);
    createKey(groupName, selectedMeetingIds, admin)
      .then(createdKey => setCreatedKey(createdKey));
  };

  const adminChange = () => setAdmin(state => !state);
  const changeGroupName = ({ target }) => setGroupName(target.value);
  const onMeetingChange = ({ target }) => setSelectedMeetings(state => ({ ...state, [target.value]: target.checked }));

  return (
    <>
      <form onSubmit={handleSubmit} className={styles}>
        <input className={styles.groupName} type='text' value={groupName} onChange={changeGroupName} placeholder="Group Name" />
        <div>
          <MeetingCheckboxes meetings={meetings} onMeetingChange={onMeetingChange} />
        </div>
        <label className={styles.admin}>
      Admin?
          <input type="checkbox" value='admin' onChange={adminChange} />
        </label>
        <div>
          <button>Create Key</button>
          <p>
            {createdKey?.id ? 'Your API Key: ' + createdKey.id : ''}
          </p>
        </div>
        
      </form>
    </>
  );
};

Form.propTypes = {
  meetings: PropTypes.array.isRequired,
  createKey: PropTypes.func.isRequired
};

export default Form;
