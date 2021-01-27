import { call, put, takeLatest } from "redux-saga/effects";
import { constants } from "../../../store/constants";
import { api } from "../../../store/constants";
import { ROUTES_PATH } from "../../../router/constants";
import { actions } from "../store";

function* SignIn({ payload }) {
  try {
    const URL = ROUTES_PATH.SIGN_IN;
    const {
      data: { token },
    } = yield call(() => api.post(URL, payload));
    yield put(actions.A_AuthSignInSuccess(token));
    localStorage.setItem("Token", token);
  } catch (err) {
  } finally {
  }
}

function* SignUp({ payload } ) {
  try {

    console.log(payload)
    const URL = ROUTES_PATH.SIGN_UP;

    const response = yield call(() => api.post(URL, payload));
    console.log(response, " response in SAga");
  } catch (err) {
    //yield put();
  } finally {
  }
}

export default function* AuthWatcher() {
  yield takeLatest(constants.SIGN_IN.REQUEST, SignIn);
  yield takeLatest(constants.SIGN_UP.REQUEST, SignUp);
}
