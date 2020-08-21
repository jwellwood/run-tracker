import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
// Reducers
import alert from './alert/alert.reducer';
import user from './user/user.reducer';
import profile from './profile/profile.reducer';

const rootReducer = combineReducers({
  alert,
  user,
  profile,
});

const middleware = [reduxThunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

export default store;

// https://react-redux.js.org/using-react-redux/static-typing

export type RootState = ReturnType<typeof rootReducer>;
