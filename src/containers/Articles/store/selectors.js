import { createSelector } from "reselect";

const selectArticlesState = (state) => state.articlesReducer;
const getArticles = (state) => state.articlesReducer.articles;
const getA_S = (state) => state.articlesReducer.A_S;

export const articleSort = () =>
  createSelector([getArticles, getA_S], (article, A_S) => {
    let resultSort = article.filter((article) =>
      article.title.includes(A_S.searchStr)
    );
    let orderBy = A_S.oderBy;
    //if(A_S.direction){}
    resultSort.sort((a, b) => {
      if (a[orderBy] > b[orderBy]) {
        return 1;
      }
      if (a[orderBy] < b[orderBy]) {
        return -1;
      }
      return 0;
    });
    return resultSort;
  });

export const getAllArticles = () =>
  createSelector(selectArticlesState, (state) => state.articles);

export const getOrderSortA_S = () =>
  createSelector(selectArticlesState, (state) => state.A_S);

export const getArticle = (id) =>
  createSelector(selectArticlesState, (state) =>
    state.articles.find((article) => article.id === id)
  );

export const getArticleCount = (id) =>
  createSelector(selectArticlesState, (state) => state.count[id]);
