import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_FAILURE,
  GET_USER_PROFILE_SUCCESS,
} from '../Actions/Profile';

const initialState = {
  profile: null,
  error: '',
  isLoading: false,
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profile: action.profile,
      };
    case GET_USER_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'profile',
  storage,
  whitelist: ['profile'],
};

export default persistReducer(persistConfig, ProfileReducer);
