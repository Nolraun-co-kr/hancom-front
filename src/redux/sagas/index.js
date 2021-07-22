import { all, fork } from 'redux-saga/effects';
import { getManyReferenceSaga, getOneReferenceSaga } from './reference';
import { getManyUsecaseeSaga, getOneUsecaseeSaga } from './usecase';

export default function* rootSaga() {
  yield all([
    fork(getManyReferenceSaga),
    fork(getOneReferenceSaga),
    fork(getManyUsecaseeSaga),
    fork(getOneUsecaseeSaga),
  ]);
}
