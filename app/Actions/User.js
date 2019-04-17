export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const login = (username, password) => ({
  type: LOGIN,
  username,
  password,
});

export const loginSuccess = auth => ({
  type: LOGIN_SUCCESS,
  auth,
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error,
});

export const logout = auth => ({
  type: LOGOUT,
  auth,
});

export const logoutSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const logoutFailure = (error, auth) => ({
  type: LOGIN_FAILURE,
  error,
  auth,
});
