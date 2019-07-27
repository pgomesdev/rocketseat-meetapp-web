export const AUTH_SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST';
export const AUTH_SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS';
export const AUTH_SIGN_FAILURE = '@auth/SIGN_FAILURE';

export function signInRequest(email, password) {
  return {
    type: AUTH_SIGN_IN_REQUEST,
    payload: { email, password },
  };
}
