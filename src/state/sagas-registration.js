import { all, fork, takeLatest } from 'redux-saga/effects';

import contentSagas from './Content/sagas';

const sagas = {
  ...contentSagas,
};

const watchers = Object.entries(sagas).map(([key, value]) => (
  function* watchSaga() {
    yield takeLatest(key, value);
  }));

export default function* root() {
  yield all(watchers.map(watcher => fork(watcher)));
}
