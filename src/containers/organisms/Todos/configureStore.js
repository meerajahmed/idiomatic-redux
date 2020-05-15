import createStore from '../../../lib/redux/createStore';
import reducers from './reducers';
import { loadState, saveState } from '../../../utils/localStorage';
import debounce from '../../../utils/debounce';

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
  const preloadedState = loadState();

  const store = createStore(reducers, preloadedState);
  if (__DEV__) {
    store.dispatch = addLoggingToDispatch(store);
  }
  store.subscribe(
    debounce(() => {
      /* we want to persist just the data and not the UI state */
      const { todos } = store.getState();
      saveState({ todos });
    }, 1000)
  );

  return store;
};

export default configureStore;
