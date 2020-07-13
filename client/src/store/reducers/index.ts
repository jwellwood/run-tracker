import { combineReducers } from 'redux';
import alert from './alert.reducer';
import auth from './auth.reducer';
import user from './user.reducer';
import profile from './profile.reducer';
import records from './records.reducer';

const rootReducer = combineReducers({
  alert,
  auth,
  user,
  profile,
  records,
});

export default rootReducer;
