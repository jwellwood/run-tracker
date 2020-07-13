import React from 'react';

const Profile = () => {
  return (
    <div>
      <p>@Private</p>
      <p>
        A page with the user's details, including total times/distances and
        account details: username, email, location etc.
      </p>
      <div>
        Links:
        <ul>
          <li>Home</li>
          <li>Edit profile</li>
          <li>Records list</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
