import { all } from 'redux-saga/effects';
import TabViewSaga from './tabView/saga';

export default function* rootSaga() {
    yield all([
        TabViewSaga(),
    ]);
}
