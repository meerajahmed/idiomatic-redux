import createStore from '../../../lib/redux/createStore';
import reducers from './reducers';
import { loadState, saveState } from '../../../utils/localStorage';
import debounce from '../../../utils/debounce';

const configureStore = () => {
  /** hydrating persisted data */
  const preloadedState = loadState();

  const store = createStore(reducers, preloadedState);

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
