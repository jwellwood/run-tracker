import React from 'react';
import { useSelector } from 'react-redux';
import { IUser } from '../common/user.type';
import { Route, Redirect } from 'react-router-dom';
import * as routes from '.';

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = (props) => {
  const { isAuthenticated, loading } = useSelector(
    (state: IUser) => state.user
  );

  return loading ? (
    <div>loading</div>
  ) : !isAuthenticated ? (
    <Redirect to={routes.SIGN_IN_ROUTE} />
  ) : (
    <Route path={props.path} exact={props.exact} component={props.component} />
  );
};

export default PrivateRoute;
