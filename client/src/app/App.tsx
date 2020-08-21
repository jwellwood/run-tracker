import React, { useEffect } from 'react';
import AppTheme from 'lib/theme/AppTheme';
import { AppRoutes } from 'routes';
import { useDispatch } from 'react-redux';
import { setAuthToken, loadUser } from 'store/auth/auth.action';
import Alert from 'components/alerts/Alert.component';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <AppTheme>
      <AppRoutes />
      <Alert />
    </AppTheme>
  );
};

export default App;
