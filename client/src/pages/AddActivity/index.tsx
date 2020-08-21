import React from 'react';
import { PageContainer } from 'layout';

const AddActivity = () => {
  return (
    <PageContainer>
      <p>@Private</p>
      <p>
        A form to add the details of a new actiivty: date / time, distance,
        time, location, photo
      </p>
      <p>
        <em>Future: Who can see? public/private/friends</em>
      </p>
      <div>
        Links:
        <ul>
          <li>Profile</li>
          <li>All activities</li>
        </ul>
      </div>
    </PageContainer>
  );
};

export default AddActivity;
