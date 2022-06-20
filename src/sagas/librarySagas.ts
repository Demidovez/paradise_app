import {put, call, takeEvery} from 'redux-saga/effects';
import Actions from '../redux/actions/types/libaryActionTypes';
import {fetchArticles} from '../api/api';
import {setArticlesAction} from '../redux/actions/creators/libraryActionCreators';
import {IAction} from '../types/types';

function* workerFetchArticles(action: IAction) {
  const {data} = yield call(fetchArticles);

  yield put(setArticlesAction(data));
}

export default function* watcherSaga() {
  yield takeEvery(Actions.FETCH_ARTICLES, workerFetchArticles);
}
