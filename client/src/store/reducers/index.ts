import { combineReducers } from 'redux';
import alert from './alert.reducer';
import user from './user.reducer';
import profile from './profile.reducer';
import records from './records.reducer';

const rootReducer = combineReducers({
  alert,
  user,
  profile,
  records,
});

export default rootReducer;
