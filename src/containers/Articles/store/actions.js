import * as constants from "./constants";

export const A_FetchArticlesRequest = () => ({
  type: constants.FEATCH_ARTICLES_REQUEST,
});
export const A_FetchArticlesSuccess = (articles) => ({
  type: constants.FEATCH_ARTICLES_SUCCESS,
  payload: articles,
});
export const A_FetchArticlesFailure = (err) => ({
  type: constants.FEATCH_ARTICLES_FAILURE,
  payload: err,
});
export const A_FetchArticlesCleare = () => ({
  type: constants.REMOVE_ARTICLE_CLEARE,
});

export const A_FetchArticleRequest = () => ({});
export const A_FetchArticleSuccess = () => ({});
export const A_FetchArticleFailure = () => ({});
export const A_FetchArticleCleare = () => ({});

/**
 * TODO
 */
export const A_EditArticleRquest = () => ({});
export const A_EditArticleSuccess = () => ({});
export const A_EditArticleFailure = () => ({});
export const A_EditArticleCleare = () => ({});

export const A_removeArticleRequest = () => ({});
export const A_removeArticlesSuccess = () => ({});
export const A_removeArticlesFailure = () => ({});
export const A_removeArticlesCleare = () => ({});
