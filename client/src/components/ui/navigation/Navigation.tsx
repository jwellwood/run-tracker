import React from 'react';
import * as routes from '../../../routes';
import { Link } from 'react-router-dom';
import { Button } from '../buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUser } from '../../../store/actions/user.action';
import { IUser } from '../../../common/user.type';

const Navigation: React.FC = () => {
  const { isAuthenticated } = useSelector((state: IUser) => state.user);
  const dispatch = useDispatch();
  return (
    <div>
      <Link to={routes.HOME_ROUTE}>Home</Link>
      <Link to={routes.ABOUT_ROUTE}>About</Link>
      <Link to={routes.PROFILE_ROUTE}>Profile</Link>
      <Link to={routes.EDIT_PROFILE_ROUTE}>Edit profile</Link>
      <Link to={routes.REGISTER_ROUTE}>Register</Link>
      <Link to={routes.SIGN_IN_ROUTE}>Sign in</Link>
      <Link to={routes.RESET_PASSWORD_ROUTE}>Reset Password</Link>
      <Link to={routes.ADD_RECORD_ROUTE}>Add record</Link>
      <Link to={routes.EDIT_RECORD_ROUTE}>Edit record</Link>
      <Link to={routes.ALL_RECORDS_ROUTE}>All records</Link>
      <Link to={routes.RECORD_ROUTE}>Single record</Link>
      {isAuthenticated ? (
        <Button onClick={() => dispatch(signOutUser())}>Sign out</Button>
      ) : null}
    </div>
  );
};

export default Navigation;
