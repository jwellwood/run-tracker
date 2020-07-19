import axios from 'axios';
import { actionsIds } from '../common/actionIds';
import { setAlert } from './alert.action';
import { IAlertMessage } from '../../common/alert.type';
import * as message from '../common/messages';
import { IProfile } from '../../common/profile.type';
import { headers_config } from '../common/headers';

export const getUserProfile = () => async (dispatch: Function) => {
  try {
    const res = await axios.get('/api/profile/auth_user ');
    dispatch({
      type: actionsIds.GET_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actionsIds.GET_PROFILE_ERROR,
    });
  }
};

export const createProfile = (data: IProfile) => async (dispatch: Function) => {
  try {
    const res = await axios.post('api/profile', data, headers_config);
    dispatch({
      type: actionsIds.GET_PROFILE_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert('Profile created/ updated', 'success'));
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error: IAlertMessage) => {
        dispatch(setAlert(error.msg, 'danger'));
      });
    } else {
      dispatch(setAlert(message.UNSPECIFIED_ERROR, 'danger'));
    }
    dispatch({
      type: actionsIds.GET_PROFILE_ERROR,
    });
  }
};
