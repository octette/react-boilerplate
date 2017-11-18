import { action } from './';
import { USERS_FETCH, USERS_FETCH_BY_ID } from '../constants/actionTypes';

export const usersByID = {
  request: id => action(USERS_FETCH_BY_ID.REQUEST, { id }),
  success: response => action(USERS_FETCH_BY_ID.SUCCESS, { response }),
  failure: error => action(USERS_FETCH_BY_ID.FAILURE, { error }),
};

export default {
  request: () => action(USERS_FETCH.REQUEST),
  success: response => action(USERS_FETCH.SUCCESS, { response }),
  failure: error => action(USERS_FETCH.FAILURE, { error }),
};
