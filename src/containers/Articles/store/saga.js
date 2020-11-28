import { call, put, takeLatest } from "redux-saga/effects";
import { actions } from "../../../store/actions";
import { constants } from "../../../store/constants";
import { sagaAssessor } from "../../../utils";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4001/api",
});

const fetchAllArticles = ({ _, callback }) =>
  sagaAssessor(
    () =>
      function* () {
        /*const URL = "/articles";
        const { data } = yield call(() => api.get(URL));
        console.log(data, "data");*/
        const data = [
          {
            id: 0,
            title: "PArticle 003",
            description: "Article description",
            image_url: "https://picsum.photos/id/237/200/300",
          },
          {
            id: 1,
            title: "Article 002",
            description: "Article description",
            image_url: "https://picsum.photos/id/237/200/300",
          },
          {
            id: 2,
            title: "article 01",
            description: "Article description",
            image_url: "https://picsum.photos/id/237/200/300",
          },
          {
            id: 3,
            title: "TArticle 004",
            description: "Article description",
            image_url: "https://picsum.photos/id/237/200/300",
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
        const URL = `/articles/${payload}`;
        const { data } = yield call(() => api.get(URL));
        yield put(actions.FETCH_ARTICLE.SUCCESS(data));
      },
    actions.FETCH_ARTICLE.FAILURE,
    callback
  );

const editArticle = ({ payload, callback }) =>
  sagaAssessor(
    () =>
      function* () {
        const { id, ...rest } = payload;
        const URL = `/articles/${id}`;

        const { data } = yield call(() => api.put(URL, rest));
        yield put(actions.EDIT_ARTICLE.SUCCESS(data));
        yield put(actions.EDIT_ARTICLE.CLEARE());
      },
    actions.EDIT_ARTICLE.FAILURE,
    callback
  );

const removeArticleById = ({ payload, callback }) =>
  sagaAssessor(
    () =>
      function* () {
        const URL = `/articles/${payload}`;
        yield call(() => api.delete(URL));
        yield put(actions.REMOVE_ARTICLE.SUCCESS(payload));
      },
    actions.REMOVE_ARTICLE.FAILURE,
    callback
  );

const addNewArticle = ({ payload, callback }) =>
  sagaAssessor(
    () =>
      function* () {
        const URL = "/articles";
        const { data } = yield call(() => api.post(URL, payload));
        yield put(actions.ADD_ARTICLE.SUCCESS(data));
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
