import { call, put, takeLatest } from "redux-saga/effects";
import * as constants from "./constants";
import * as actions from "./actions";

function* fetchAllArticles({ callback }) {
  try {
    /**
     * REquest to DB
     */
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
    yield put(actions.A_FetchArticlesSuccess(data));
  } catch (err) {
    yield put(actions.A_FetchArticlesFailure(err));
  } finally {
    callback & (typeof callback === "function") && callback();
  }
}

/**
 * TODO -> create new worker
 */

export default function* articlesWatcher() {
  yield takeLatest(constants.FEATCH_ARTICLES_REQUEST, fetchAllArticles);
  /**
   * TODO yield takeLatest();
   */
}
