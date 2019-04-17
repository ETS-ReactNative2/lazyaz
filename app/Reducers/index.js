import { combineReducers } from 'redux';

import User from './User';
import Main from './Main';
import Profile from './Profile';
import MainOccasion from './MainOccasion';
import { LOGOUT_SUCCESS } from '../Actions/User';

const appReducer = combineReducers({
  user: User,
  main: Main,
  profile: Profile,
  occasions: MainOccasion,
});

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === LOGOUT_SUCCESS) {
    newState = undefined;
  }

  return appReducer(newState, action);
};

export default rootReducer;
