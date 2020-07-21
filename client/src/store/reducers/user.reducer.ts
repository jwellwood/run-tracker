import { IAction } from '../common/action.interface';
import { actionsIds } from '../common/actionIds';
import { IUser } from '../../common/user.type';

const INIT_STATE: IUser = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  user: null,
};

export default (state: IUser = INIT_STATE, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case actionsIds.AUTH_USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case actionsIds.REGISTER_USER_SUCCESS:
    case actionsIds.SIGN_IN_USER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return { ...state, ...payload, isAuthenticated: true, loading: false };
    case actionsIds.REGISTER_USER_FAIL:
    case actionsIds.AUTH_USER_ERROR:
    case actionsIds.SIGN_IN_USER_ERROR:
    case actionsIds.SIGN_OUT_USER:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
};
