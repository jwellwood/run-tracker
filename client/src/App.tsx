import React, { useEffect } from 'react';
import AppTheme from './AppTheme';
import AppRoutes from './routes/AppRoutes';
import { useDispatch } from 'react-redux';
import { setAuthToken, loadUser } from './store/actions/auth.action';

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
    </AppTheme>
  );
};

export default App;
