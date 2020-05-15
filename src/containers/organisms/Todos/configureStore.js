import createStore from '../../../lib/redux/createStore';
import reducers from './reducers';

const addPromiseSupportToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  return (action) => {
    /*
     * Now, we can dispatch both actions and promises that resolve to actions
     * */
    if (typeof action.then === 'function') {
      /* Wait for the promise to resolve before dispatching the action */
      return action.then(rawDispatch);
    }
    return rawDispatch(action);
  };
};

const addLoggingToDispatch = (store) => {
  /* eslint-disable no-console */
  const rawDispatch = store.dispatch;
  if (!console.group) {
    return rawDispatch;
  }
  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color:grey', store.getState());
    console.log('%c action', 'color:blue', action);
    rawDispatch(action);
    console.log('%c next state', 'color:green', store.getState());
    console.groupEnd();
  };
  /* eslint-disable no-console */
};

const configureStore = () => {
  /** hydrating persisted data */
  /* const preloadedState = loadState(); */

  /**
   * the order in which we override the dispatch function is important
   * logging <-- promise
   * promises should be resolved before the action is logged
   * */

  /* const store = createStore(reducers, preloadedState); */
  const store = createStore(reducers);

  if (__DEV__) {
    store.dispatch = addLoggingToDispatch(store);
  }

  store.dispatch = addPromiseSupportToDispatch(store);

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
