import { combineReducers } from 'redux';

import User from './User';
import Main from './Main';

const rootReducer = combineReducers({
  user: User,
  main: Main,
});

export default rootReducer;
