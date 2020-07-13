import { actionsIds } from '../common/actionIds';
import { IAction } from '../common/action.interface';

interface IAuth {}

const INIT_STATE: IAuth = {};

export default (state: IAuth = INIT_STATE, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case actionsIds.GET_AUTH_STATUS:
      return { ...state, payload };
    default:
      return state;
  }
};
