import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  AUTH_SIGN_IN_REQUEST,
  AUTH_SIGN_UP_REQUEST,
  AUTH_SIGN_OUT,
  signInSuccess,
} from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;
  const response = yield call(api.post, 'sessions', { email, password });

  const { token, user } = response.data;

  yield put(signInSuccess(token, user));

  history.push('/dashboard');
}

export function* signUp({ payload }) {
  const { fullname, username, email, password } = payload;
  yield call(api.post, 'users', { fullname, username, email, password });

  history.push('/');
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(AUTH_SIGN_IN_REQUEST, signIn),
  takeLatest(AUTH_SIGN_UP_REQUEST, signUp),
  takeLatest(AUTH_SIGN_OUT, signOut),
]);
