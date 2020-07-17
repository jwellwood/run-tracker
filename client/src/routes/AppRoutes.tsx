import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as routes from '.';
import Navigation from '../components/ui/navigation/Navigation';
import PrivateRoute from './PrivateRoute';
import NotFound from '../components/Pages/NotFound';

const Home = lazy(() => import('../components/Pages/Home'));
const About = lazy(() => import('../components/Pages/About'));
const Register = lazy(() => import('../components/Pages/Register'));
const SignIn = lazy(() => import('../components/Pages/SignIn'));
const ResetPassword = lazy(() => import('../components/Pages/ResetPassword'));
const Profile = lazy(() => import('../components/Pages/Profile'));
const EditProfile = lazy(() => import('../components/Pages/EditProfile'));
const AllRecords = lazy(() => import('../components/Pages/AllRecords'));
const Record = lazy(() => import('../components/Pages/Record'));
const AddRecord = lazy(() => import('../components/Pages/AddRecord'));
const EditRecord = lazy(() => import('../components/Pages/EditRecord'));

function AppRoutes() {
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
}

export default AppRoutes;
