import { actionsIds } from '../../constants/actionIds/actionIds';

interface IActivity {}

const INIT_STATE: IActivity = {};

export default (state: IActivity = INIT_STATE, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case actionsIds.CREATE_NEW_ACTIVITY:
      return { ...state, payload };
    case actionsIds.GET_USER_ACTIVITIES:
      return { ...state, payload };
    case actionsIds.GET_ACTIVITY_BY_ID:
      return { ...state, payload };
    case actionsIds.DELETE_ACTIVITY_BY_ID:
      return { ...state, payload };
    default:
      return state;
  }
};
