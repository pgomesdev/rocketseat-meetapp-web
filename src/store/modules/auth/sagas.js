import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';

import { AUTH_SIGN_IN_REQUEST, AUTH_SIGN_IN_SUCCESS } from './actions';

export function* signIn({ payload }) {
  const response = yield call(api.post, 'sessions', payload);

  yield put({ type: AUTH_SIGN_IN_SUCCESS, payload: response.data });

  history.push('/dashboard');
}

export default all([takeLatest(AUTH_SIGN_IN_REQUEST, signIn)]);
