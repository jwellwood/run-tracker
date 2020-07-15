import axios from 'axios';

import { actionsIds } from '../common/actionIds';
import { IRegisterUser, ISignInUser } from '../../common/registration.type';
import { IAlertMessage } from '../../common/alert.type';
import { setAlert } from './alert.action';
import { loadUser } from './auth.action';

export const registerUser = (data: IRegisterUser) => async (
  dispatch: Function
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/user', data, config);
    dispatch({
      type: actionsIds.REGISTER_USER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    // TODO - work on getting messages from server to show
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error: IAlertMessage) => {
        dispatch(setAlert(error.msg, 'danger'));
      });
    }
    dispatch({
      type: actionsIds.REGISTER_USER_FAIL,
    });
  }
};

export const signInUser = (data: ISignInUser) => async (dispatch: Function) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/auth', data, config);
    dispatch({
      type: actionsIds.SIGN_IN_USER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    // TODO - work on getting messages from server to show
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error: IAlertMessage) => {
        dispatch(setAlert(error.msg, 'danger'));
      });
    }
    dispatch({
      type: actionsIds.SIGN_IN_USER_ERROR,
    });
  }
};

export const signOutUser = () => async (dispatch: Function) => {
  try {
    dispatch({
      type: actionsIds.SIGN_OUT_USER,
    });
  } catch (error) {
    dispatch(setAlert('problem logging out', 'danger'));
  }
};
