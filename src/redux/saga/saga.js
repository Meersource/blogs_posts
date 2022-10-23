import axios from "axios";
import {
  takeEvery,
  takeLatest,
  put,
  all,
  fork,
  call,
} from "redux-saga/effects";
import {
  getBlogsError,
  getBlogsSuccess,
  getSingleBlogsError,
  getSingleBlogsSuccess,
} from "../actions";

import { GET_BLOGS_START, GET_SINGLE_BLOGS_START } from "../actions/ActionType";
import { getBlogsApi, getSingleBlogsApi } from "../api";

function* onRegisterUserSync() {
  try {
    const response = yield call(getBlogsApi);
    console.log("response", response?.data);
    if (response.status === 200) {
      yield put(getBlogsSuccess(response?.data));
    }
  } catch (error) {
    yield put(getBlogsError(error));
  }
}

function* onGetSingleBlogSync({ payload }) {
  try {
    const response = yield call(getSingleBlogsApi, payload);
    console.log("response", response?.data);
    if (response.status === 200) {
      yield put(getSingleBlogsSuccess(response?.data));
    }
  } catch (error) {
    yield put(getSingleBlogsError(error));
  }
}

export function* authSaga() {
  yield takeLatest(GET_BLOGS_START, onRegisterUserSync);
  yield takeLatest(GET_SINGLE_BLOGS_START, onGetSingleBlogSync);
}

const userSagas = [fork[authSaga]];

export default function* rootSaga() {
  yield all([authSaga()]);
}
