export const GET_MAIN_OCCASION = 'GET_MAIN_OCCASION';
export const GET_MAIN_OCCASION_SUCCESS = 'GET_MAIN_OCCASION_SUCCESS';
export const GET_MAIN_OCCASION_FAILURE = 'GET_MAIN_OCCASION_FAILURE';

export const getMainOccasion = () => ({
  type: GET_MAIN_OCCASION,
});

export const getMainOccasionSuccess = occasions => ({
  type: GET_MAIN_OCCASION_SUCCESS,
  occasions,
});

export const getMainOccasionFailure = error => ({
  type: GET_MAIN_OCCASION_FAILURE,
  error,
});
