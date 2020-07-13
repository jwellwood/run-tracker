import { IAction } from '../common/action.interface';
import { actionsIds } from '../common/actionIds';

interface IUser {}

const INIT_STATE: IUser = {};

export default (state: IUser = INIT_STATE, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case actionsIds.REGISTER_USER:
      return { ...state, payload };
    case actionsIds.SIGN_IN_USER:
      return { ...state, payload };
    case actionsIds.LOGOUT_USER:
      return { ...state, payload };
    default:
      return state;
  }
};
