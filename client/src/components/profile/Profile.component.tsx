import React from 'react';
import { Link } from 'react-router-dom';
import { CREATE_PROFILE_ROUTE } from 'constants/routes';
import ProfileSettings from './ProfileSettings.component';
import { Button } from 'react-bootstrap';

interface Props {
  user: {
    username: string;
    email: string;
  };
  profile: any;
  onSignOut: () => void;
}

const Profile: React.FC<Props> = ({ user, profile, onSignOut }) => {
  return (
    <div>
      <h1>user: {user.username}</h1>
      <h1>email: {user.email}</h1>
      {profile._id ? (
        <ProfileSettings profile={profile} />
      ) : (
        <Link to={CREATE_PROFILE_ROUTE}>create profile</Link>
      )}
      <Button onClick={onSignOut}>Logout</Button>
    </div>
  );
};

export default Profile;
