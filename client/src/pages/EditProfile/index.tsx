import React from 'react';
import { PageContainer } from 'layout';
import { EDIT_PROFILE_TITLE } from 'constants/page-titles';
import UpdateProfileForm from 'components/forms/UpdateProfileForm';

const EditProfile = () => {
  return (
    <PageContainer
      title={EDIT_PROFILE_TITLE.title}
      subtitle={EDIT_PROFILE_TITLE.subtitle}
    >
      <p>TODO: email, password, location, units, theme, delete, friends list</p>

      <UpdateProfileForm />
    </PageContainer>
  );
};

export default EditProfile;
