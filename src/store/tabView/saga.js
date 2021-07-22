import { all, put, takeLatest, call } from 'redux-saga/effects';
import {
    onGetTab1Data,
    onGetTab2Data,
} from '../../api/tabs';
import {
    actionTypes,
    getTab1DataSuccess,
    getTab1DataFail,
    getTab2DataSuccess,
    getTab2DataFail, 
} from './action';

function* getTab1Data() {
    try {
        const response = yield call(onGetTab1Data);
        console.log("res::", response)
        yield put(getTab1DataSuccess(response.data));
    } catch (error) {
        yield put(getTab1DataFail(error.data.error.errors));
    }
}

function* getTab2Data() {
    try {
        const response = yield call(onGetTab2Data);
        yield put(getTab2DataSuccess(response.data));
    } catch (error) {
        yield put(getTab2DataFail(error.data.error.errors));
    }
}

export default function* rootSaga() {
    yield all([takeLatest(actionTypes.GET_TAB1_DATA_REQUEST, getTab1Data)]);
    yield all([takeLatest(actionTypes.GET_TAB2_DATA_REQUEST, getTab2Data)]);
}
