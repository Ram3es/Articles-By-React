import * as constants from "./constants";

const initialState = {
  error: null,
  articles: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FEATCH_ARTICLES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.FEATCH_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload,
        error: null,
      };
    case constants.FEATCH_ARTICLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case constants.FEATCH_ARTICLES_CLEARE:
      return { ...initialState };
    /**
     * TODO add new cases for EDIT Actions
     */
    default:
      return { ...state };
  }
};
