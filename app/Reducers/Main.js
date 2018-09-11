import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import {
  GET_MAIN_CATEGORY,
  GET_MAIN_CATEGORY_FAILURE,
  GET_MAIN_CATEGORY_SUCCESS,
} from '../Actions/Main';

const initialState = {
  category: null,
  error: '',
  isLoading: false,
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAIN_CATEGORY:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MAIN_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        category: action.category,
      };
    case GET_MAIN_CATEGORY_FAILURE:
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
  key: 'main',
  storage,
  whitelist: ['category'],
};

export default persistReducer(persistConfig, MainReducer);
