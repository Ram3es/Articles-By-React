import * as constants from "./constants";

export const A_FetchArticlesRequest = () => ({
  type: constants.FETCH_ARTICLES_REQUEST,
});
export const A_FetchArticlesSuccess = (articles) => ({
  type: constants.FETCH_ARTICLES_SUCCESS,
  payload: articles,
});
export const A_FetchArticlesFailure = (err) => ({
  type: constants.FETCH_ARTICLES_FAILURE,
  payload: err,
});
export const A_FetchArticlesCleare = () => ({
  type: constants.REMOVE_ARTICLE_CLEARE,
});

export const A_FetchArticleRequest = (id) => ({
  type: constants.FETCH_ARTICLE_REQUEST,
  payload: id,
});
export const A_FetchArticleSuccess = (article) => ({
  type: constants.FETCH_ARTICLE_SUCCESS,
  payload: article,
});
export const A_FetchArticleFailure = (err) => ({
  type: constants.FETCH_ARTICLE_FAILURE,
  payload: err,
});
export const A_FetchArticleCleare = () => ({
  type: constants.FETCH_ARTICLE_CLEARE,
});

export const A_EditArticleRquest = (article) => ({
  type: constants.EDIT_ARTICLE_REQUEST,
  payload: article,
});
export const A_EditArticleSuccess = (article) => ({
  type: constants.EDIT_ARTICLE_SUCCESS,
  payload: article,
});
export const A_EditArticleFailure = (err) => ({
  type: constants.EDIT_ARTICLE_FAILURE,
  payload: err,
});
export const A_EditArticleCleare = () => ({
  type: constants.EDIT_ARTICLE_CLEARE,
});

export const A_RemoveArticleRequest = (id) => ({
  type: constants.REMOVE_ARTICLE_REQUEST,
  payload: id,
});
export const A_RemoveArticlesSuccess = (id) => ({
  type: constants.REMOVE_ARTICLE_SUCCESS,
  payload: id,
});
export const A_RemoveArticlesFailure = (err) => ({
  type: constants.REMOVE_ARTICLE_FAILURE,
  payload: err,
});
export const A_RemoveArticlesCleare = () => ({
  type: constants.REMOVE_ARTICLE_CLEARE,
});

export const A_AddNewArticleRequest = (article) => ({
  type: constants.ADD_ARTICLE_REQUEST,
  payload: article,
});
export const A_AddNewArticleSuccess = (article) => ({
  type: constants.ADD_ARTICLE_SUCCESS,
  payload: article,
});
export const A_AddNewArticleFailure = (err) => ({
  type: constants.ADD_ARTICLE_FAILURE,
  payload: err,
});
export const A_AddNewArticleCleare = () => ({
  type: constants.ADD_ARTICLE_CLEARE,
});
