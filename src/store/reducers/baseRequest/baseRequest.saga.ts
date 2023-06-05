import {
  requestBaseRequest,
  requestBaseRequestSuccessful,
  rrequestBaseRequestFailed,
} from '@/store/reducers/baseRequest/baseRequest.slice';
import baseRequestApi from '../../../services/baseRequest/baseRequestApi';
import { put, takeLatest, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

export function* requestBaseRequestSaga({
  payload,
}: PayloadAction<{
  country: string;
}>) {
  try {
    const { country } = payload;
    // @ts-ignore
    const response = yield call(baseRequestApi.getBaseRequest, country);
    yield put(requestBaseRequestSuccessful(response));
  } catch (e) {
    console.log('request failed : ', e);
    yield put(rrequestBaseRequestFailed(e));
  }
}

export default function* baseRequestSaga() {
  yield takeLatest(requestBaseRequest, requestBaseRequestSaga);
}
