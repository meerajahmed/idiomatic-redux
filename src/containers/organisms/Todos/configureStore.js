import createStore from '../../../lib/redux/createStore';
import reducers from './reducers';

const promise = () => (next) => (action) => {
  /*
   * Now, we can dispatch both actions and promises that resolve to actions
   * */
  if (typeof action.then === 'function') {
    /* Wait for the promise to resolve before dispatching the action */
    return action.then(next);
  }
  return next(action);
};
/*
 * mental model: function with several arguments that are applied as they become available
 * */
const logging = (store) => (next) => {
  /* eslint-disable no-console */
  if (!console.group) {
    return next;
  }
  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color:grey', store.getState());
    console.log('%c action', 'color:blue', action);
    next(action);
    console.log('%c next state', 'color:green', store.getState());
    console.groupEnd();
  };
  /* eslint-disable no-console */
};

const wrapDispatchWithMiddlewares = (store, middlewares) => {
  // slice -> clone
  middlewares
    .slice()
    .reverse()
    .forEach(() => {
      // eslint-disable-next-line no-param-reassign
      store.dispatch = middlewares(store)(store.dispatch);
    });
};

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
    middlewares.push(logging);
  }

  // store.dispatch = addPromiseSupportToDispatch(store); order in which the dispatch is overridden

  wrapDispatchWithMiddlewares(store, middlewares);

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
