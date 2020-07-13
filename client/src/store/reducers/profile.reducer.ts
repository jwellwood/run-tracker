import { IAction } from '../common/action.interface';
import { actionsIds } from '../common/actionIds';

interface IProfile {}

const INIT_STATE: IProfile = {};

export default (state: IProfile = INIT_STATE, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case actionsIds.CREATE_UPDATE_USER_PROFILE:
      return { ...state, payload };
    case actionsIds.GET_USER_PROFILE:
      return { ...state, payload };
    case actionsIds.DELETE_USER_PROFILE:
      return { ...state, payload };
    default:
      return state;
  }
};
