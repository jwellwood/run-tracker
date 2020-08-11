import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from 'store/actions/profile.action';

import Spinner from '../ui/spinners/Spinner.component';
import { IUser } from 'common/user.type';
import { Link } from 'react-router-dom';
import { EDIT_PROFILE_ROUTE } from 'constants/routes';
import { IProfileState } from 'common/profile.type';

const Profile = () => {
  const { user } = useSelector((state: IUser) => state.user);
  const { profile, loading } = useSelector(
    (state: IProfileState) => state.profile
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch, user]);

  return loading ? (
    <Spinner />
  ) : user ? (
    <div style={{ border: '1px solid black' }}>
      <h1>user: {user.username}</h1>
      <h1>email: {user.email}</h1>
      {profile ? (
        <div>
          From profile: {profile.location}, dark mode:{' '}
          {profile.hasDarkMode ? 'true' : 'false'},
          {profile.hasMetric ? 'metric' : 'imperial'},
          <Link to={EDIT_PROFILE_ROUTE}>edit profile</Link>
        </div>
      ) : (
        <Link to={EDIT_PROFILE_ROUTE}>create profile</Link>
      )}
    </div>
  ) : null;
};

export default Profile;
