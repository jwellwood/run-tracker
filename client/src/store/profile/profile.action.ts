import axios from 'axios';
import { actionsIds } from 'constants/actionIds/actionIds';
import { setAlert } from '../alert/alert.action';
import * as message from 'constants/messages';
import { headers_config } from 'common/config';
import { PROFILE_ROUTE } from 'constants/routes';

const { PROFILE_CREATED } = message.profile;

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

// TODO type this
export const createProfile = (data: any, history: any) => async (
  dispatch: Function
) => {
  try {
    const res = await axios.post('api/profile', data, headers_config);
    dispatch({
      type: actionsIds.GET_PROFILE_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert(PROFILE_CREATED.success, 'success'));
    history.push(PROFILE_ROUTE);
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error: any) => {
        dispatch(setAlert(error.msg, 'danger'));
      });
    } else {
      dispatch(setAlert(PROFILE_CREATED.failure, 'danger'));
    }
    dispatch({
      type: actionsIds.GET_PROFILE_ERROR,
    });
  }
};
