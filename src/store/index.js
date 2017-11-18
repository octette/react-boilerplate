import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';
import createReducer from '../reducers';


const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const composed = [];

if (process.env.NODE_ENV !== 'production') {
  // Create logger with immutable support
  // @see https://github.com/evgenyrodionov/redux-logger#transform-immutable-without-combinereducers
  const logger = require('redux-logger').createLogger({
    stateTransformer: (state) => {
      if (state) {
        return state;
      }
      return state;
    },
    duration: true,
    diff: true,
    collapsed: true,
  });

  middleware.push(logger);

  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== undefined) {
    // @see https://github.com/zalmoxisus/redux-devtools-extension
    composed.push(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
  }
}

const store = createStore(
  createReducer(),
  compose(applyMiddleware(...middleware), ...compose)
);

sagaMiddleware.run(sagas);

export default store;
