
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export function createRequestTypes(base) {
  return {
    REQUEST: `${base}_${REQUEST}`,
    SUCCESS: `${base}_${SUCCESS}`,
    FAILURE: `${base}_${FAILURE}`,
  };
}

export const action = (type, payload = {}) => ({ type, ...payload });
