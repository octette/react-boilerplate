import { fork } from 'redux-saga/effects';
import { watchGetAllUsers } from './users';

export default function* root() {
  yield fork(watchGetAllUsers);
}
