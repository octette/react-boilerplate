import { combineReducers } from 'redux';
import users from './users';

export default function createReducer(asyncReducers) {
  const reducers = {
    users,
    ...asyncReducers,
  };

  return combineReducers(reducers);
}
