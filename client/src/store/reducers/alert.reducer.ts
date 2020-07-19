import { actionsIds } from '../common/actionIds';
import { IAlert } from '../../common/alert.type';
import { IAction } from '../common/action.interface';

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
