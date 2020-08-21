import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IUser } from 'common/user.type';
import { getUserProfile } from 'store/profile/profile.action';
import { signOutUser } from 'store/user/user.action';
import Profile from './Profile.component';
import CustomSpinner from 'components/ui/spinners/Spinner.component';
import { RootState } from 'store';

export default () => {
  const { user } = useSelector((state: IUser) => state.user);
  const { profile, loading } = useSelector((state: RootState) => state.profile);
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

  return loading ? <CustomSpinner /> : profileView;
};
