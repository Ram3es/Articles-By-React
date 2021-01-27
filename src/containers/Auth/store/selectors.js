import { createSelector } from "reselect";

const selectAuthState = (state) => state.authReducer;

export const getStateAuth = () =>
  createSelector(selectAuthState, (state) => state.auth);
