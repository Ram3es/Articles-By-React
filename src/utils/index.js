import { call, put } from "redux-saga/effects";

const types = ["REQUEST", "SUCCESS", "FAILURE", "CLEARE"];

export const actionConstantsCreator = (constArr) => {
  const result = {};

  constArr.forEach((constItem) => {
    result[constItem] = {};
    types.forEach((typeItem) => {
      result[constItem][typeItem] = `${constItem}_${typeItem}`;
    });
  });

  return result;
};

export const actionCreator = (constArr) => {
  const result = {};

  constArr.forEach((constItem) => {
    result[constItem] = {};
    types.forEach((typeItem) => {
      result[constItem][typeItem] = (payload = {}, callback, options) => ({
        type: `${constItem}_${typeItem}`,
        payload,
        callback,
        options,
      });
    });
  });

  return result;
};

export function* sagaAssessor(request, failure, callback) {
  try {
    yield call(request());
  } catch (err) {
    yield put(failure(err));
  } finally {
    callback && typeof callback === "functions" && callback();
  }
}

export const createReducer = (initialState, handlers) => (
  state = initialState,
  action
) =>
  handlers.hasOwnProperty(action.type)
    ? handlers[action.type](state, action)
    : state;
