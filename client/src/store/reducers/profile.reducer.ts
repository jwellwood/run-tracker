import { IAction } from '../common/action.interface';
import { actionsIds } from '../common/actionIds';
import { IProfileState } from '../../common/profile.type';

const INIT_STATE: IProfileState = {
  profile: null,
  loading: true,
  error: null,
};

export default (state: IProfileState = INIT_STATE, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case actionsIds.GET_PROFILE_SUCCESS:
      return { ...state, profile: payload, error: null, loading: false };
    case actionsIds.GET_PROFILE_ERROR:
      return { ...state, profile: null, error: payload, loading: false };
    case actionsIds.CLEAR_USER_PROFILE:
      return { ...state, profile: null, error: null, loading: false };

    default:
      return state;
  }
};
