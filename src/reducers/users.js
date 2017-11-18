import { USERS_FETCH } from '../constants/actionTypes';

export const initialState = {
  isFetching: false,
  data: [],
  error: {},
  message: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_FETCH.REQUEST:
      return {
        ...state,
        isFetching: true,
        data: [],
        error: {},
        message: {},
      };
    case USERS_FETCH.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.response,
        error: {},
        message: {},
      };
    case USERS_FETCH.FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
        message: action.error.message,
      };
    default:
      return state;
  }
};
