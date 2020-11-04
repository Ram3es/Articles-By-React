import { call, put, takeLatest, select } from "redux-saga/effects";
import { actions } from "../../../store/actions";
import { constants } from "../../../store/constants";
import * as selectors from "./selectors";
import { sagaAssessor } from "../../../utils";

const fetchAllArticles = ({ payload, callback }) =>
  sagaAssessor(
    () =>
      function* () {
        const data = [
          {
            id: 1,
            title: "Article title 001",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://picsum.photos/id/237/200/300",
          },
          {
            id: 2,
            title: "Article title 002",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://picsum.photos/id/237/200/300",
          },
          {
            id: 3,
            title: "Article title 003",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://picsum.photos/id/237/200/300",
          },
          {
            id: 4,
            title: "Article title 004",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://picsum.photos/id/237/200/300",
          },
        ];
        yield put(actions.FETCH_ARTICLES.SUCCESS(data));
      },
    actions.FETCH_ARTICLE.FAILURE,
    callback
  );

const fetchArticleById = ({ payload, callback }) =>
  sagaAssessor(
    () =>
      function* () {
        const article = yield select(selectors.getArticle(payload));
        yield put(actions.FETCH_ARTICLE.SUCCESS(article));
      },
    actions.FETCH_ARTICLE.FAILURE,
    callback
  );

const editArticle = ({ payload, callback }) =>
  sagaAssessor(
    () =>
      function* () {
        yield put(actions.EDIT_ARTICLE.SUCCESS(payload));
        yield put(actions.EDIT_ARTICLE.CLEARE());
      },
    actions.EDIT_ARTICLE.FAILURE,
    callback
  );

const removeArticleById = ({ payload, callback }) =>
  sagaAssessor(
    () =>
      function* () {
        yield put(actions.REMOVE_ARTICLE.SUCCESS(payload));
      },
    actions.REMOVE_ARTICLE.FAILURE,
    callback
  );

const addNewArticle = ({ payload, callback }) =>
  sagaAssessor(
    () =>
      function* () {
        yield put(actions.ADD_ARTICLE.SUCCESS(payload));
      },
    actions.ADD_ARTICLE.FAILURE,
    callback
  );

export default function* articlesWatcher() {
  yield takeLatest(constants.FETCH_ARTICLES.REQUEST, fetchAllArticles);
  yield takeLatest(constants.FETCH_ARTICLE.REQUEST, fetchArticleById);
  yield takeLatest(constants.EDIT_ARTICLE.REQUEST, editArticle);
  yield takeLatest(constants.REMOVE_ARTICLE.REQUEST, removeArticleById);
  yield takeLatest(constants.ADD_ARTICLE.REQUEST, addNewArticle);
}
