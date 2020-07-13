import { actionsIds } from '../common/actionIds';
import { IAction } from '../common/action.interface';

interface IAlert {
  msg: string;
  type: string;
}

const INIT_STATE: IAlert[] = [];

export default (state = INIT_STATE, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case actionsIds.SET_ALERT:
      return handleSetAlert(state, payload);
    default:
      return state;
  }
};

const handleSetAlert = (state: IAlert[], payload: IAlert[]) => ({
  ...state,
  payload,
});
