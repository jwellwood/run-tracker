import React from 'react';
import { PageContainer } from 'layout';

const Activity = () => {
  return (
    <PageContainer>
      <p>@Private</p>
      <p>
        Specific details of an activity including an edit button and: date/time,
        distance, duration, pace, location, photo, comparison to overall
        averages
      </p>

      <div>
        Links:
        <ul>
          <li>Edit activity</li>
          <li>All activities</li>
        </ul>
      </div>
    </PageContainer>
  );
};

export default Activity;
