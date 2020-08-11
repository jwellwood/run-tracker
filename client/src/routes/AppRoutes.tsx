import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as routes from 'constants/routes';
import Navigation from 'components/navigation/Navigation';
import PrivateRoute from './PrivateRoute';
import NotFound from 'pages/NotFound';

const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));
const Register = lazy(() => import('pages/Register'));
const SignIn = lazy(() => import('pages/SignIn'));
const ResetPassword = lazy(() => import('pages/ResetPassword'));
const Profile = lazy(() => import('pages/Profile'));
const EditProfile = lazy(() => import('pages/EditProfile'));
const AllRecords = lazy(() => import('pages/AllRecords'));
const Record = lazy(() => import('pages/Record'));
const AddRecord = lazy(() => import('pages/AddRecord'));
const EditRecord = lazy(() => import('pages/EditRecord'));

export const AppRoutes = () => {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<div style={{ color: 'red' }}>Loading...</div>}>
        <Switch>
          <Route exact path={routes.HOME_ROUTE} component={Home} />
          <Route exact path={routes.ABOUT_ROUTE} component={About} />
          <Route exact path={routes.REGISTER_ROUTE} component={Register} />
          <Route exact path={routes.SIGN_IN_ROUTE} component={SignIn} />
          <Route
            exact
            path={routes.RESET_PASSWORD_ROUTE}
            component={ResetPassword}
          />
          <PrivateRoute exact path={routes.PROFILE_ROUTE} component={Profile} />
          <PrivateRoute
            exact
            path={routes.EDIT_PROFILE_ROUTE}
            component={EditProfile}
          />
          <PrivateRoute
            exact
            path={routes.ALL_RECORDS_ROUTE}
            component={AllRecords}
          />
          <PrivateRoute exact path={routes.RECORD_ROUTE} component={Record} />
          <PrivateRoute
            exact
            path={routes.ADD_RECORD_ROUTE}
            component={AddRecord}
          />
          <PrivateRoute
            exact
            path={routes.EDIT_RECORD_ROUTE}
            component={EditRecord}
          />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};
