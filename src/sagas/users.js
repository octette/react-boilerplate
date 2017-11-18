import { call, put, takeLatest } from 'redux-saga/effects';
import users from '../actions/users';
import { USERS_FETCH } from '../constants/actionTypes';
import { getUsers } from '../services/API/User';

export function* getAllUsers() {
  try {
    const response = yield call(getUsers);
    yield put(users.success(response));
  } catch (error) {
    yield put(users.failure(error));
  }
}

export function* watchGetAllUsers() {
  yield takeLatest(USERS_FETCH.REQUEST, getAllUsers);
}
