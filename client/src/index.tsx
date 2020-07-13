import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './routes/AppRoutes';
import * as serviceWorker from './serviceWorker';
// import { Helmet } from 'react-helmet';
import AppTheme from './AppTheme';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    {/* // TODO add this back in later */}
    {/* <Helmet>
      <title>Run Tracker</title>
      <meta name='description' content='Track your progress!' />
      <meta name='keywords' content='run, running, fitness, progress' />
    </Helmet> */}
    <Provider store={store}>
      <AppTheme>
        <AppRoutes />
      </AppTheme>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
