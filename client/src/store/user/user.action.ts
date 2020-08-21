import axios from 'axios';
import { actionsIds } from 'constants/actionIds/actionIds';
import { IRegisterUser, ISignInUser } from 'common/registration.type';
import { setAlert } from '../alert/alert.action';
import { loadUser } from '../auth/auth.action';
import * as message from 'constants/messages';
import { headers_config } from 'common/config';

const { SIGN_IN, REGISTER, SIGN_OUT } = message.registration;

export const registerUser = (data: IRegisterUser) => async (
  dispatch: Function
) => {
  try {
    const res = await axios.post('/api/user', data, headers_config);
    dispatch({
      type: actionsIds.REGISTER_USER_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert(REGISTER.success, 'success'));
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error: any) => {
        dispatch(setAlert(error.msg, 'danger'));
      });
    } else {
      dispatch(setAlert(REGISTER.failure, 'danger'));
    }
    dispatch({
      type: actionsIds.REGISTER_USER_FAIL,
    });
  }
};

export const signInUser = (data: ISignInUser) => async (dispatch: Function) => {
  try {
    const res = await axios.post('/api/auth', data, headers_config);
    dispatch({
      type: actionsIds.SIGN_IN_USER_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert(SIGN_IN.success, 'success'));
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error: any) => {
        dispatch(setAlert(error.msg, 'danger'));
      });
    } else {
      dispatch(setAlert(SIGN_IN.failure, 'danger'));
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
    dispatch({
      type: actionsIds.CLEAR_USER_PROFILE,
    });
    dispatch(setAlert(SIGN_OUT.success, 'success'));
  } catch (error) {
    dispatch(setAlert(SIGN_OUT.failure, 'danger'));
  }
};
