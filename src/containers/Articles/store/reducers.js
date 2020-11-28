import { constants } from "../../../store/constants";
import { createReducer } from "../../../utils";

const initialState = {
  error: null,
  articles: [],
  selectedArticle: null,
  loading: false,
  count: 0,
};

// export default createReducer(initialState, {
//   [constants.FETCH_ARTICLES.REQUEST](state) {
//     return {
//       ...state,
//       loading: true,
//     };
//   },
//   [constants.FETCH_ARTICLES.SUCCESS](state, action) {
//     return {
//       ...state,
//       loading: false,
//       articles: action.payload,
//       error: null,
//     };
//   }
// })

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_ARTICLE.REQUEST:
    case constants.REMOVE_ARTICLE.REQUEST:
    case constants.EDIT_ARTICLE.REQUEST:
    case constants.FETCH_ARTICLE.REQUEST:
    case constants.FETCH_ARTICLES.REQUEST:
    case constants.INKREMENT.REQUEST:
      return {
        ...state,
        count: state.count + 1,
      };

    case constants.FETCH_ARTICLES.SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload,
        error: null,
      };
    case constants.ADD_ARTICLE.FAILURE:
    case constants.REMOVE_ARTICLE.FAILURE:
    case constants.EDIT_ARTICLE.FAILURE:
    case constants.FETCH_ARTICLE.FAILURE:
    case constants.FETCH_ARTICLES.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case constants.EDIT_ARTICLE.CLEARE:
      return { ...state, selectedArticle: null };
    case constants.FETCH_ARTICLE.CLEARE:
      return { ...state, selectedArticle: null };
    case constants.FETCH_ARTICLES.CLEARE:
      return { ...state, articles: null };
    case constants.FETCH_ARTICLE.SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        selectedArticle: action.payload,
      };
    case constants.EDIT_ARTICLE.SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        articles: [...state.articles].map((article) => {
          if (article.id === action.payload.id) {
            return action.payload;
          } else {
            return article;
          }
        }),
      };
    case constants.REMOVE_ARTICLE.SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        articles: [...state.articles].filter(
          (article) => article.id !== action.payload
        ),
      };
    case constants.ADD_ARTICLE.SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        articles: [...state.articles].concat(action.payload),
      };
    default:
      return { ...state };
  }
};
