import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
} from '../Actions/User';
import { Auth } from '../Constants/Types';

const initialState = {
  auth: Auth,
  error: '',
  isLoggedIn: false,
  isAuthenticating: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticating: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isAuthenticating: false,
        auth: action.auth,
        error: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isAuthenticating: false,
        error: action.error,
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    case LOGOUT_SUCCESS:
      return {
        ...initialState,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        error: action.error,
        auth: action.auth,
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['auth'],
};

export default persistReducer(persistConfig, UserReducer);
