import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  HOME,
  ABOUT,
  SIGN_IN,
  REGISTER,
  RESET_PASSWORD,
  PROFILE,
  EDIT_PROFILE,
  ALL_RECORDS,
  RECORD,
  ADD_RECORD,
  EDIT_RECORD,
} from '.';
const Home = lazy(() => import('../components/Home'));
const About = lazy(() => import('../components/About'));
const Register = lazy(() => import('../components/Pages/Register'));
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
      <Switch>
        <Suspense fallback={<div style={{ color: 'red' }}>Loading...</div>}>
          <Route exact path={HOME} component={Home} />
          <Route exact path={ABOUT} component={About} />
          <Route exact path={REGISTER} component={Register} />
          <Route exact path={RESET_PASSWORD} component={ResetPassword} />
          <Route exact path={PROFILE} component={Profile} />
          <Route exact path={EDIT_PROFILE} component={EditProfile} />
          <Route exact path={ALL_RECORDS} component={AllRecords} />
          <Route exact path={RECORD} component={Record} />
          <Route exact path={ADD_RECORD} component={AddRecord} />
          <Route exact path={EDIT_RECORD} component={EditRecord} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default AppRoutes;
