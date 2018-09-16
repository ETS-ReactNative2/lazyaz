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
  LOGOUT,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
} from '../Actions/User';
import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_FAILURE,
  GET_USER_PROFILE_SUCCESS,
} from '../Actions/Profile';
import ApiConstants from '../Constants/ApiConstants';

function* loginSaga(action) {
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
  } catch (error) {
    yield put({
      type: LOGIN_FAILURE,
      error: error.message,
    });
  }
}

function* logoutSaga(action) {
  const url = `${ApiConstants.API_URL}api/v1/users/logout`;
  const headers = {
    headers: {
      Authorization: `${action.auth.token_type} ${action.auth.access_token}`,
    },
  };

  try {
    yield call(
      axios.delete,
      url,
      headers,
    );
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: LOGOUT_FAILURE,
      error: error.message,
      auth: action.auth,
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

function* getUserProfileSaga(action) {
  const url = `${ApiConstants.API_URL}api/v1/users`;
  const headers = {
    headers: {
      Authorization: `${action.auth.token_type} ${action.auth.access_token}`,
    },
  };
  try {
    const response = yield call(
      axios.get,
      url,
      headers,
    );

    yield put({
      type: GET_USER_PROFILE_SUCCESS,
      profile: response.data,
    });
  } catch (error) {
    yield put({
      type: GET_USER_PROFILE_FAILURE,
      error: error.message,
    });
  }
}

function* rootSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(GET_MAIN_CATEGORY, getMainCategorySaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(GET_USER_PROFILE, getUserProfileSaga);
}

export default rootSaga;
