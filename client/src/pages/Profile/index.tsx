import React from 'react';
import { PageContainer } from 'layout';
import Profile from 'components/profile/Profile.container';
import { PROFILE_TITLE } from 'constants/page-titles';

const ProfilePage = () => {
  return (
    <PageContainer title={PROFILE_TITLE.title}>
      <p>@Private</p>
      <p>
        A page with the user's details, including total times/distances and
        account details: username, email, location etc.
      </p>

      <Profile />
    </PageContainer>
  );
};

export default ProfilePage;
