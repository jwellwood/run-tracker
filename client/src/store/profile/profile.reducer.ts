import { actionsIds } from 'constants/actionIds/actionIds';
import { initProfileState } from './initProfileState';

const initialState = { ...initProfileState };

export type ProfileState = typeof initialState;

interface Action {
  type: string;
  payload: ProfileState;
}

export default (state: ProfileState = { ...initialState }, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case actionsIds.GET_PROFILE_SUCCESS:
      return handleProfileSuccess(state, payload);
    case actionsIds.GET_PROFILE_ERROR:
      return handleProfileError(state, payload);
    case actionsIds.CLEAR_USER_PROFILE:
      return handleClearProfile(state, payload);
    default:
      return state;
  }
};

const handleProfileSuccess = (
  state: ProfileState,
  payload: any
): ProfileState => ({
  ...state,
  profile: payload,
  loading: false,
  error: null,
});

const handleProfileError = (
  state: ProfileState,
  payload: any
): ProfileState => ({
  ...state,
  profile: initialState.profile,
  error: payload,
  loading: false,
});

const handleClearProfile = (
  state: ProfileState,
  payload: any
): ProfileState => ({
  ...state,
  profile: initialState.profile,
  error: null,
  loading: false,
});
