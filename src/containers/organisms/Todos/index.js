import React from 'react';
import AddTodo from '../../../components/molecules/AddTodo';
import FooterLinks from '../../../components/molecules/FooterLinks';
import TodoList from '../../molecules/TodoList';
import { Provider } from '../../../lib/react-redux';
import createStore from '../../../lib/redux/createStore';
import reducers from './reducers';
import { loadState, saveState } from '../../../utils/localStorage';
import debounce from '../../../utils/debounce';

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

// eslint-disable-next-line no-console
console.log(store.getState());

/**
 * Separating the container and the presentational components is often a good idea, but you
 *  shouldn't take it as a dogma. Only do this when it truly reduces the complexity of your code base
 *
 *  In general, first trying to extract the presentational components. If there is too much
 * boilerplate passing the props through them, then you can create the containers around them that
 * load the data and specify the behavior.
 * */

const Todos = () => {
  return (
    <Provider store={store}>
      <AddTodo />
      <TodoList />
      <FooterLinks />
    </Provider>
  );
};

export default Todos;
