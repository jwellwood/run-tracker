import { actionsIds } from '../common/actionIds';

export const setAlert = (msg: string, alertType: string) => (dispatch: any) => {
  dispatch({
    type: actionsIds.SET_ALERT,
    payload: { msg, alertType },
  });
};
