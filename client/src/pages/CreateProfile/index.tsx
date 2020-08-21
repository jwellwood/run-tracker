import React from 'react';
import { PageContainer } from 'layout';
import { CREATE_PROFILE_TITLE } from 'constants/page-titles';
import CreateProfileForm from 'components/forms/CreateProfileForm.component';

const CreateProfile = () => {
  return (
    <PageContainer
      title={CREATE_PROFILE_TITLE.title}
      subtitle={CREATE_PROFILE_TITLE.subtitle}
    >
      <p>
        A page with options to change email, password, username, location, and
        delete account
      </p>

      <CreateProfileForm />
    </PageContainer>
  );
};

export default CreateProfile;
