import { all, takeLatest, call, put } from 'redux-saga/effects';
import { USER_UPDATE_PROFILE_REQUEST, updateProfileSuccess } from './actions';

import api from '../../../services/api';

export function* updateProfile({ payload }) {
  const { fullname, username, email, ...rest } = payload;

  const profile = Object.assign(
    { fullname, username, email },
    rest.oldPassword ? rest : {}
  );

  const response = yield call(api.put, '/users', profile);

  yield put(updateProfileSuccess(response.data));
}

export default all([takeLatest(USER_UPDATE_PROFILE_REQUEST, updateProfile)]);
