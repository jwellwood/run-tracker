import React from 'react';

const Record = () => {
  return (
    <div>
      <p>@Private</p>
      <p>
        Specific details of a record including an edit button and: date/time,
        distance, duration, pace, location, photo, comparison to overall
        averages
      </p>

      <div>
        Links:
        <ul>
          <li>Edit record</li>
          <li>All records</li>
        </ul>
      </div>
    </div>
  );
};

export default Record;
