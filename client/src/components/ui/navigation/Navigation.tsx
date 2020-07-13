import React from 'react';
import * as routes from '../../../routes';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
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
    </div>
  );
};

export default Navigation;
