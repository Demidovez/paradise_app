import {all} from 'redux-saga/effects';
import librarySagas from './librarySagas';

function* rootSaga() {
  yield all([librarySagas()]);
}

export default rootSaga;
