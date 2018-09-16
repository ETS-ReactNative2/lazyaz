export const GET_USER_PROFILE = 'GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_FAILURE = 'GET_USER_PROFILE_FAILURE';

export const getUserProfile = auth => ({
  type: GET_USER_PROFILE,
  auth,
});

export const getUserProfileSuccess = profile => ({
  type: GET_USER_PROFILE_SUCCESS,
  profile,
});

export const getUserProfileFailure = error => ({
  type: GET_USER_PROFILE_FAILURE,
  error,
});
