import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as routes from '.';
import Navigation from '../components/ui/navigation/Navigation';
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
      <Switch>
        <Suspense fallback={<div style={{ color: 'red' }}>Loading...</div>}>
          <Route exact path={routes.HOME_ROUTE} component={Home} />
          <Route exact path={routes.ABOUT_ROUTE} component={About} />
          <Route exact path={routes.REGISTER_ROUTE} component={Register} />
          <Route exact path={routes.SIGN_IN_ROUTE} component={SignIn} />
          <Route
            exact
            path={routes.RESET_PASSWORD_ROUTE}
            component={ResetPassword}
          />
          <Route exact path={routes.PROFILE_ROUTE} component={Profile} />
          <Route
            exact
            path={routes.EDIT_PROFILE_ROUTE}
            component={EditProfile}
          />
          <Route exact path={routes.ALL_RECORDS_ROUTE} component={AllRecords} />
          <Route exact path={routes.RECORD_ROUTE} component={Record} />
          <Route exact path={routes.ADD_RECORD_ROUTE} component={AddRecord} />
          <Route exact path={routes.EDIT_RECORD_ROUTE} component={EditRecord} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default AppRoutes;
