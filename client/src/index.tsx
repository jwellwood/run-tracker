import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './routes/AppRoutes';
import * as serviceWorker from './serviceWorker';
import { Helmet } from 'react-helmet';
import AppTheme from './AppTheme';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Run Tracker</title>
      <meta name='description' content='Track your progress!' />
      <meta name='keywords' content='run, running, fitness, progress' />
    </Helmet>
    <AppTheme>
      <AppRoutes />
    </AppTheme>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
