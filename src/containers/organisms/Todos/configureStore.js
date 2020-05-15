import createStore from '../../../lib/redux/createStore';
import reducers from './reducers';
import { applyMiddleware } from '../../../lib/redux';
import logger from '../../../lib/redux-logger';
import promise from '../../../lib/redux-promise';

const configureStore = () => {
  /** hydrating persisted data */
  /* const preloadedState = loadState(); */

  /**
   * the order in which we override the dispatch function is important
   * logging <-- promise (order in which action propagate)
   * promises should be resolved before the action is logged
   * */

  /* const store = createStore(reducers, preloadedState); */
  const store = createStore(reducers);
  const middlewares = [promise]; // order in which the action propagate

  if (__DEV__) {
    // store.dispatch = addLoggingToDispatch(store);
    middlewares.push(logger);
  }

  // store.dispatch = addPromiseSupportToDispatch(store); order in which the dispatch is overridden

  applyMiddleware(store, middlewares);

  /*
  store.subscribe(
    debounce(() => {
      /!* we want to persist just the data and not the UI state *!/
      const { todos } = store.getState();
      saveState({ todos });
    }, 1000)
  );
  */

  return store;
};

export default configureStore;
