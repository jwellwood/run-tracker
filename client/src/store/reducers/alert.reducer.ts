import { actionsIds } from '../common/actionIds';
import { IAction } from '../common/action.interface';

export interface IAlert {
  id: string;
  msg: string;
  type: string;
}

const INIT_STATE: IAlert[] = [];

export default (state = INIT_STATE, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case actionsIds.SET_ALERT:
      return [...state, payload];
    case actionsIds.REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
};
