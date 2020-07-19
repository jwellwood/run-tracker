import axios from 'axios';
import { actionsIds } from '../common/actionIds';
import { IRegisterUser, ISignInUser } from '../../common/registration.type';
import { IAlertMessage } from '../../common/alert.type';
import { setAlert } from './alert.action';
import { loadUser } from './auth.action';
import * as message from '../common/messages';
import { headers_config } from '../common/headers';

export const registerUser = (data: IRegisterUser) => async (
  dispatch: Function
) => {
  try {
    const res = await axios.post('/api/user', data, headers_config);
    dispatch({
      type: actionsIds.REGISTER_USER_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert(message.REG_SUCCESS, 'success'));
    dispatch(loadUser());
  } catch (error) {
    console.log(error);
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error: IAlertMessage) => {
        dispatch(setAlert(error.msg, 'danger'));
      });
    } else {
      dispatch(setAlert(message.UNSPECIFIED_ERROR, 'danger'));
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
    dispatch(setAlert(message.SIGN_IN_SUCCESS, 'success'));
    dispatch(loadUser());
  } catch (error) {
    console.log('++++++++++++', error);
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error: IAlertMessage) => {
        dispatch(setAlert(error.msg, 'danger'));
      });
    } else {
      dispatch(setAlert(message.UNSPECIFIED_ERROR, 'danger'));
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
    dispatch(setAlert(message.SIGN_OUT_SUCCESS, 'success'));
  } catch (error) {
    dispatch(setAlert(message.UNSPECIFIED_ERROR, 'danger'));
  }
};
