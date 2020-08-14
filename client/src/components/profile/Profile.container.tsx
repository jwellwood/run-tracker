import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IProfileState } from 'common/profile.type';
import { IUser } from 'common/user.type';
import { getUserProfile } from 'store/actions/profile.action';
import { signOutUser } from 'store/actions/user.action';
import { Spinner } from 'react-bootstrap';
import Profile from './Profile.component';

export default () => {
  const { user } = useSelector((state: IUser) => state.user);
  const { profile, loading } = useSelector(
    (state: IProfileState) => state.profile
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch, user]);

  const onSignOut = () => {
    dispatch(signOutUser());
  };

  const profileView = user ? (
    <Profile user={user} profile={profile} onSignOut={onSignOut} />
  ) : null;

  return loading ? <Spinner animation='grow' /> : profileView;
};
