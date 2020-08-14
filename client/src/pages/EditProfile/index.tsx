import React from 'react';
import UpdateProfileForm from 'components/forms/UpdateProfileForm.component';
import { PageContainer } from 'layout';
import { EDIT_PROFILE_TITLE } from 'constants/page-titles';

const EditProfile = () => {
  return (
    <PageContainer
      title={EDIT_PROFILE_TITLE.title}
      subtitle={EDIT_PROFILE_TITLE.subtitle}
    >
      <p>
        A page with options to change email, password, username, location, and
        delete account
      </p>
      <p>
        <em>Future: add/edit 'friends' list</em>
      </p>

      <UpdateProfileForm />
    </PageContainer>
  );
};

export default EditProfile;
