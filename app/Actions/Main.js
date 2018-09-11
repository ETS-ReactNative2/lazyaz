export const GET_MAIN_CATEGORY = 'GET_MAIN_CATEGORY';
export const GET_MAIN_CATEGORY_SUCCESS = 'GET_MAIN_CATEGORY_SUCCESS';
export const GET_MAIN_CATEGORY_FAILURE = 'GET_MAIN_CATEGORY_FAILURE';

export const getMainCategory = () => ({
  type: GET_MAIN_CATEGORY,
});

export const getMainCategorySuccess = category => ({
  type: GET_MAIN_CATEGORY_SUCCESS,
  category,
});

export const getMainCategoryFailure = error => ({
  type: GET_MAIN_CATEGORY_FAILURE,
  error,
});
