import React from 'react';

const AddRecord = () => {
  return (
    <div>
      <p>@Private</p>
      <p>
        A form to add the details of a new record: date / time, distance, time,
        location, photo
      </p>
      <p>
        <em>Future: Who can see? public/private/friends</em>
      </p>
      <div>
        Links:
        <ul>
          <li>Profile</li>
          <li>All records</li>
        </ul>
      </div>
    </div>
  );
};

export default AddRecord;
