import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILED,
} from '../../constants';

export const fetchCategoryList = () => {
  return {
    type: FETCH_CATEGORIES,
  };
};

export const fetchCategoryListSuccess = (categoryList) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: {
      categoryList,
    },
  };
};

export const fetchCategoryListFailed = (error) => {
  return {
    type: FETCH_CATEGORIES_FAILED,
    payload: {
      error,
    },
  };
};
