import React from 'react';

const EditRecord = () => {
  return (
    <div>
      <p>@Private</p>
      <p>
        A form to edit the details of an existing record: date / time, distance,
        time, location, photo
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

export default EditRecord;
