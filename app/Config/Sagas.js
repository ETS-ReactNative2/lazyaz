import { NavigationActions } from 'react-navigation';
import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';

import {
  GET_MAIN_CATEGORY,
  GET_MAIN_CATEGORY_FAILURE,
  GET_MAIN_CATEGORY_SUCCESS,
} from '../Actions/Main';
import {
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from '../Actions/User';
import ApiConstants from '../Constants/ApiConstants';

function* login(action) {
  const url = `${ApiConstants.API_URL}oauth/token`;
  const params = {
    username: action.username,
    password: action.password,
    client_id: 2,
    scope: '*',
    client_secret: ApiConstants.CLIENT_SECRET,
    grant_type: 'password',
  };

  try {
    const response = yield call(
      axios.post,
      url,
      params,
    );

    yield put({
      type: LOGIN_SUCCESS,
      auth: response.data,
    });
    yield put(NavigationActions.navigate({ routeName: 'Authenticated' }));
  } catch (error) {
    yield put({
      type: LOGIN_FAILURE,
      error: error.message,
    });
  }
}

function* getMainCategorySaga() {
  const url = `${ApiConstants.API_URL}api/v1/services`;
  try {
    const response = yield call(
      axios.get,
      url,
    );

    yield put({
      type: GET_MAIN_CATEGORY_SUCCESS,
      category: response.data,
    });
  } catch (error) {
    yield put({
      type: GET_MAIN_CATEGORY_FAILURE,
      error: error.message,
    });
  }
}

function* rootSaga() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(GET_MAIN_CATEGORY, getMainCategorySaga);
}

export default rootSaga;
