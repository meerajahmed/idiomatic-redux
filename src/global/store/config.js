import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  // create a store enhancer
  const middlewareEnhancer = applyMiddleware(...middleware);
  const enhancers = [middlewareEnhancer];
  // compose enhancers into one function
  const composedEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(rootReducer, composedEnhancers);
  sagaMiddleware.run(rootSaga);
  return store;
};
