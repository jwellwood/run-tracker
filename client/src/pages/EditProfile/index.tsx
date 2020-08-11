import React from 'react';
import CreateUpdateProfileForm from 'components/profile/CreateUpdateProfileForm.component';

const EditProfile = () => {
  return (
    <div>
      <p>@Private</p>
      <p>
        A page with options to change email, password, username, location, and
        delete account
      </p>
      <p>
        <em>Future: add/edit 'friends' list</em>
      </p>
      <div>
        Links:
        <ul>
          <li>Home</li>
          <li>Profile</li>
        </ul>
      </div>
      <CreateUpdateProfileForm />
    </div>
  );
};

export default EditProfile;
