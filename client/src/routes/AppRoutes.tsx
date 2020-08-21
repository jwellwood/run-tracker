import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as routes from 'constants/routes';
import Navigation from 'components/navigation/Navigation';
import PrivateRoute from './PrivateRoute';
import NotFound from 'pages/NotFound';
import CustomSpinner from 'components/ui/spinners/Spinner.component';

const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));
const Register = lazy(() => import('pages/Register'));
const SignIn = lazy(() => import('pages/SignIn'));
const ResetPassword = lazy(() => import('pages/ResetPassword'));
const Profile = lazy(() => import('pages/Profile'));
const CreateProfile = lazy(() => import('pages/CreateProfile'));
const EditProfile = lazy(() => import('pages/EditProfile'));
const AllActivities = lazy(() => import('pages/AllActivities'));
const Activity = lazy(() => import('pages/Activity'));
const AddActivity = lazy(() => import('pages/AddActivity'));
const EditActivity = lazy(() => import('pages/EditActivity'));

export const AppRoutes = () => {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<CustomSpinner />}>
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
            path={routes.CREATE_PROFILE_ROUTE}
            component={CreateProfile}
          />
          <PrivateRoute
            exact
            path={routes.EDIT_PROFILE_ROUTE}
            component={EditProfile}
          />
          <PrivateRoute
            exact
            path={routes.ALL_ACTIVITIES_ROUTE}
            component={AllActivities}
          />
          <PrivateRoute
            exact
            path={routes.ACTIVITY_ROUTE}
            component={Activity}
          />
          <PrivateRoute
            exact
            path={routes.ADD_ACTIVITY_ROUTE}
            component={AddActivity}
          />
          <PrivateRoute
            exact
            path={routes.EDIT_ACTIVITY_ROUTE}
            component={EditActivity}
          />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};
