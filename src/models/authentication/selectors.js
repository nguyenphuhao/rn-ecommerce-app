import { createSelector } from 'reselect';

const authTokenSelector = (state) => state.loginReducer.token;
const authLoadingSelector = (state) => state.loginReducer.isLoading;
const authErrorSelector = (state) => state.loginReducer.error;

export const selectAuthError = createSelector(
  authErrorSelector,
  (error) => error,
);
export const selectAuthLoading = createSelector(
  authLoadingSelector,
  (loading) => loading,
);
export const selectAuthToken = createSelector(
  authTokenSelector,
  (token) => token,
);
