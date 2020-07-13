import axios from 'axios';

import { actionsIds } from '../common/actionIds';
import { IRegisterUser } from '../../common/registration.type';
import { IAlertMessage } from '../../common/alert.type';
import { setAlert } from './alert.action';

export const registerUser = (data: IRegisterUser) => async (dispatch: any) => {
  console.log('fired');
  try {
    const res = await axios.post('/api/user', data);
    dispatch({
      type: actionsIds.REGISTER_USER,
      payload: res,
    });
    dispatch(setAlert('Success!', 'success'));
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error: IAlertMessage) => {
        dispatch(setAlert(error.msg, 'danger'));
      });
      console.log('errs:', errors);
    }
    console.error(error);
  }
};
