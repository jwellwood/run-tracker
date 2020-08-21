import { actionsIds } from 'constants/actionIds/actionIds';
import { initUserState } from './initUserState';

const initialState = { ...initUserState };

export type UserState = typeof initialState;

interface Action {
  type: string;
  payload: UserState;
}

export default (
  state: UserState = { ...initialState },
  action: Action
): UserState => {
  const { type, payload } = action;
  switch (type) {
    case actionsIds.AUTH_USER_LOADED:
      return handleAuthUserLoaded(state, payload);
    case actionsIds.REGISTER_USER_SUCCESS:
    case actionsIds.SIGN_IN_USER_SUCCESS:
      localStorage.setItem('token', payload.token!);
      return handleRegisterSuccess(state, payload);
    case actionsIds.REGISTER_USER_FAIL:
    case actionsIds.AUTH_USER_ERROR:
    case actionsIds.SIGN_IN_USER_ERROR:
    case actionsIds.SIGN_OUT_USER:
      localStorage.removeItem('token');
      return handleAuthFailureAndSignOut(state);
    default:
      return state;
  }
};

const handleAuthUserLoaded = (state: UserState, payload: any): UserState => ({
  ...state,
  isAuthenticated: true,
  loading: false,
  user: payload,
});

const handleRegisterSuccess = (state: UserState, payload: any): UserState => ({
  ...state,
  ...payload,
  isAuthenticated: true,
  loading: false,
});

const handleAuthFailureAndSignOut = (state: UserState): UserState => ({
  ...state,
  token: null,
  isAuthenticated: false,
  loading: false,
  user: initialState.user,
});
