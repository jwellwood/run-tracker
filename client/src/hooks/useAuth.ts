import { useSelector } from 'react-redux';
import { RootState } from 'store';

export const useAuth = () => {
  const { isAuthenticated, loading } = useSelector(
    (state: RootState) => state.user
  );

  const isAuth: boolean = isAuthenticated;

  return { isAuth, loading };
};
