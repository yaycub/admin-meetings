import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getMeetings from '../../services/getMeetings';
import Checkbox from './Checkbox';

const Form = ({ apiKey }) => {
  const [meetings, setMeetings] = useState([]);
  const [selectedMeetings, setSelectedMeetings] = useState({});

  useEffect(() => {
    getMeetings('5e964d39e7179a2493c7ce49')
      .then(setMeetings);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedMeetingsArr = Object.keys(selectedMeetings).filter(meetingKey => { if(selectedMeetings[meetingKey]) return meetingKey; });

    console.log(selectedMeetingsArr);
  };

  const onMeetingChange = ({ target }) => {
    const { value, checked } = target;
    setSelectedMeetings(state => ({ ...state, [value]: checked }));
  };

  const checkboxes = meetings.map((meeting, i) => {
    return (
      <Checkbox name={meeting.name} value={meeting.zoomId} onChange={onMeetingChange} key={i} />
    );
  });

  return (
    <form onSubmit={handleSubmit}>
      {checkboxes}
      <button>Submit</button>
    </form>
  );
};

Form.propTypes = {
  apiKey: PropTypes.string.isRequired
};

export default Form;
