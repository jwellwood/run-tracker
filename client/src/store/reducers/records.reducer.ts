import { IAction } from '../common/action.interface';
import { actionsIds } from '../common/actionIds';

interface IRecord {}

const INIT_STATE: IRecord = {};

export default (state: IRecord = INIT_STATE, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case actionsIds.CREATE_NEW_RECORD:
      return { ...state, payload };
    case actionsIds.GET_USER_RECORDS:
      return { ...state, payload };
    case actionsIds.GET_RECORD_BY_ID:
      return { ...state, payload };
    case actionsIds.DELETE_RECORD_BY_ID:
      return { ...state, payload };
    default:
      return state;
  }
};
