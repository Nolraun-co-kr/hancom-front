import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import * as types from '../../constants/referenceTypes';
import axios from 'axios';

/*
 * 리스트
 * */
function getManyReferenceApi(params) {
  const { category } = params;
  return axios.get(`/api/dummy/reference?category=${category || 't1'}`);
}

function* getManyReference(action) {
  try {
    const result = yield call(getManyReferenceApi, action.params);

    yield put({ type: types.GET_MANY_REFERENCE_SUCCESS, data: result.data });
  } catch (err) {
    yield put({ type: types.GET_MANY_REFERENCE_FAILURE, data: err.response.data });
  }
}

function* watchGetManyReference() {
  yield takeLatest(types.GET_MANY_REFERENCE_REQUEST, getManyReference);
}

export function* getManyReferenceSaga() {
  yield all([fork(watchGetManyReference)]);
}

/*
 * 상세
 * */
function getOneReferenceApi(params) {
  const { id } = params;
  return axios.get(`/api/dummy/reference/${id}`);
}

function* getOneReference(action) {
  try {
    const result = yield call(getOneReferenceApi, action.params);

    yield put({ type: types.GET_ONE_REFERENCE_SUCCESS, data: result.data });
  } catch (err) {
    yield put({ type: types.GET_ONE_REFERENCE_FAILURE, data: err.response.data });
  }
}

function* watchGetOneReference() {
  yield takeLatest(types.GET_ONE_REFERENCE_REQUEST, getOneReference);
}

export function* getOneReferenceSaga() {
  yield all([fork(watchGetOneReference)]);
}
