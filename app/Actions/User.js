export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

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

export const logout = () => ({
  type: LOGOUT,
});
