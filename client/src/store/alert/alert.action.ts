import { actionsIds } from 'constants/actionIds';
import { v4 as uuidv4 } from 'uuid';

export const setAlert = (msg: string, type: string) => (dispatch: Function) => {
  const id: string = uuidv4();
  dispatch({
    type: actionsIds.SET_ALERT,
    payload: { msg, type, id },
  });
  setTimeout(() => {
    dispatch({ type: actionsIds.REMOVE_ALERT, payload: id });
  }, 5000);
};
