import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
// import { api } from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

const _email = ['nail@mail.com', 'nail'];
const _pass = '1234';

function _signIn(email, pass) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (_email.indexOf(email) >= 0 && pass === _pass) {
        resolve({ token: 'this-is-a-token-123456', code: 200 });
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('invalid email or password');
      }
    }, 2000);
  });
}

function _signUp(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.tron.log(data);
      resolve({ token: 'this-is-a-token-123456', code: 200 });
    }, 2000);
  });
}

function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    console.tron.log(payload);

    // defaults.auth has priority over headers.Authorization. After login, this field needs to be null.
    // api.defaults.auth = { username, password };
    const response = yield call(_signIn, email, password);
    console.tron.log(response);
    if ('code' in response && response.code === 200) {
      yield put(signInSuccess(response.token));
    } else {
      yield put(signFailure());
    }

    // const { data } = response.data; // This is the user Token.

    // api.defaults.auth = null;
    // api.defaults.headers.Authorization = `Bearer ${data}`;

    // TODO remove user password here
    // session.user.sub.password = password;
    // yield put(signInSuccess(data));
    toast.success('Sign in success, Welcome to App!');
    history.push('/home');
  } catch (err) {
    console.tron.log(err);
    toast.error('Sign in failed, check informations!');

    yield put(signFailure());
  }
}

function* signUp({ payload }) {
  try {
    console.tron.log(payload);

    const response = yield call(_signUp, payload);

    if ('code' in response && response.code === 200) {
      yield put(signInSuccess(response.token));
    } else {
      yield put(signFailure());
    }

    toast.success('Sign Up success, Welcome to App!');
    history.push('/home');
  } catch (err) {
    console.tron.log(err);
    toast.error('Sign Up failed, check informations and try again!');
    yield put(signFailure());
  }
}

/* function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
} */

function signOut() {
  history.push('/sign-in');
}

export default all([
  // takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
