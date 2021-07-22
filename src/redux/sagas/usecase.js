import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import * as types from '../../constants/useCaseTypes';
import axios from 'axios';

/*
 * 리스트
 * */
function getManyUsecaseeApi(params) {
  return axios.get(`/api/dummy/usecase`);
}

function* getManyUsecasee(action) {
  try {
    const result = yield call(getManyUsecaseeApi, action.params);

    console.log(result);

    yield put({ type: types.GET_MANY_USECASE_SUCCESS, data: result.data });
  } catch (err) {
    yield put({ type: types.GET_MANY_USECASE_FAILURE, data: err.response.data });
  }
}

function* watchGetManyUsecasee() {
  yield takeLatest(types.GET_MANY_USECASE_REQUEST, getManyUsecasee);
}

export function* getManyUsecaseeSaga() {
  yield all([fork(watchGetManyUsecasee)]);
}

/*
 * 상세
 * */
function getOneUsecaseeApi(params) {
  const { id } = params;
  return axios.get(`/api/dummy/usecase/${id}`);
}

function* getOneUsecasee(action) {
  try {
    const result = yield call(getOneUsecaseeApi, action.params);

    yield put({ type: types.GET_ONE_USECASE_SUCCESS, data: result.data });
  } catch (err) {
    yield put({ type: types.GET_ONE_USECASE_FAILURE, data: err.response.data });
  }
}

function* watchGetOneUsecasee() {
  yield takeLatest(types.GET_ONE_USECASE_REQUEST, getOneUsecasee);
}

export function* getOneUsecaseeSaga() {
  yield all([fork(watchGetOneUsecasee)]);
}
