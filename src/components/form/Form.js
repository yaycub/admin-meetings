import React, { useState } from 'react';

const Form = () => {
  const [meetings, setMeetings] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const meetingsIfTrue = Object.keys(meetings).filter(meeting => {
      if(meetings[meeting]) return meeting;
    });

    console.log(meetingsIfTrue);
  };

  const onMeetingChange = ({ target }) => {
    const { value, checked } = target;

    
    setMeetings(state => ({ ...state, [value]: checked }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
      Meeting One
        <input 
          type="checkbox"
          name="meetings"
          value="meeting-1"
          onChange={onMeetingChange}
        />
      </label>
      
      <label>
      Meeting two
        <input 
          type="checkbox"
          name="meetings"
          value="meeting-2"
          onChange={onMeetingChange}
        />
      </label>

      <label>
      Meeting Three
        <input 
          type="checkbox"
          name="meetings"
          value="meeting-3"
          onChange={onMeetingChange}
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default Form;
