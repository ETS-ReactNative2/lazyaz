import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import {
  GET_MAIN_OCCASION,
  GET_MAIN_OCCASION_SUCCESS,
  GET_MAIN_OCCASION_FAILURE,
} from '../Actions/MainOccasion';

const initialState = {
  occasions: null,
  error: '',
  isLoading: false,
};

const MainOccasionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAIN_OCCASION:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MAIN_OCCASION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        occasions: action.occasions,
      };
    case GET_MAIN_OCCASION_FAILURE:
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
  key: 'occasions',
  storage,
  whitelist: ['occasions'],
};

export default persistReducer(persistConfig, MainOccasionReducer);
