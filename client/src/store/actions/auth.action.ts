import axios from 'axios';

import { actionsIds } from '../common/actionIds';

export const setAuthToken: Function = (token: string) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export const loadUser = () => async (dispatch: Function) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');
    dispatch({
      type: actionsIds.AUTH_USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actionsIds.AUTH_USER_ERROR,
    });
  }
};
