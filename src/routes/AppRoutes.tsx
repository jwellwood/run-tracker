import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HOME, ABOUT } from '.';
const Home = lazy(() => import('../components/Home'));
const About = lazy(() => import('../components/About'));

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div style={{ color: 'red' }}>Loading...</div>}>
          <Route exact path={HOME} component={Home} />
          <Route exact path={ABOUT} component={About} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default AppRoutes;
