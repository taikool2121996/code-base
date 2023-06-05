// libs
import 'jest';
import { call, put, takeLatest } from 'redux-saga/effects';
// networks
import {
  requestBaseRequest,
  requestBaseRequestSuccessful,
} from '@/store/reducers/baseRequest/baseRequest.slice';
import baseRequestApi from '@/services/baseRequest/baseRequestApi';
import baseRequestSaga, {
  requestBaseRequestSaga,
} from '@/store/reducers/baseRequest/baseRequest.saga';

describe('test signupSaga watcher', () => {
  const genObject = baseRequestSaga();

  it('should wait for latest requestBaseRequest action and call requestBaseRequestSaga', () => {
    expect(genObject.next().value).toEqual(
      takeLatest(requestBaseRequest, requestBaseRequestSaga),
    );
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('test requestSignupSaga', () => {
  const mockedBaseRequestData = 'United State';

  // if requestBaseRequestSaga have params
  const generator = requestBaseRequestSaga({
    payload: {
      // @ts-ignore
      country: 'United State' as string,
    },
    type: 'requestBaseRequestSaga' as string,
  });

  it('call function to get baseRequest data', () => {
    expect(generator.next().value).toEqual(
      call(baseRequestApi.getBaseRequest, 'United State'),
    );
  });

  it('successfully', () => {
    const testValue = generator.next(mockedBaseRequestData).value;
    expect(testValue).toEqual(
      put(requestBaseRequestSuccessful(mockedBaseRequestData)),
    );
  });
});
