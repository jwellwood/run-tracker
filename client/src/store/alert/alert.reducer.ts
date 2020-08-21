import { actionsIds } from 'constants/actionIds';
import { initAlertState } from './initAlertState';

const initialState = { ...initAlertState };

export type AlertState = typeof initialState;

interface Action {
  type: string;
  payload: AlertState;
}

export default (
  state: AlertState = { ...initialState },
  action: Action
): AlertState => {
  const { type, payload } = action;
  switch (type) {
    case actionsIds.SET_ALERT:
      return handleShowAlertAction(state, payload);
    case actionsIds.REMOVE_ALERT:
      return { ...state, ...initAlertState };
    default:
      return state;
  }
};

const handleShowAlertAction = (
  state: AlertState,
  payload: AlertState
): AlertState => ({
  ...state,
  ...payload,
});
