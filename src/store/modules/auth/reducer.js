import produce from 'immer';
import { AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from './actions';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case AUTH_SIGN_IN_SUCCESS:
        draft.token = action.payload.token;
        draft.signed = true;
        break;
      case AUTH_SIGN_OUT:
        draft.token = null;
        draft.signed = false;
        break;
      default:
        break;
    }
  });
}
