import React from 'react';
import { Link } from 'react-router-dom';
import { EDIT_PROFILE_ROUTE } from 'constants/routes';
import ProfileSettings from './ProfileSettings.component';
import { IProfile } from 'common/profile.type';

interface Props {
  user: {
    username: string;
    email: string;
  };
  profile: IProfile;
  onSignOut: () => void;
}

const Profile: React.FC<Props> = ({ user, profile, onSignOut }) => {
  return (
    <div>
      <h1>user: {user.username}</h1>
      <h1>email: {user.email}</h1>
      {profile ? (
        <ProfileSettings profile={profile} onSignOut={onSignOut} />
      ) : (
        <Link to={EDIT_PROFILE_ROUTE}>create profile</Link>
      )}
    </div>
  );
};

export default Profile;
