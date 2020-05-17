import { v4 as uuid } from 'uuid';
import * as api from '../../../api';

const addTodos = (text) => ({
  type: 'ADD_TODO',
  id: uuid(),
  text,
});

const requestTodos = (filter) => ({
  type: 'REQUEST_TODOS',
  filter,
});

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response,
});

/* asynchronous action creator */

/**
 * An action promise resolves through a single action at the end, but we want an abstraction that
 * represents multiple actions dispatched over the period of time.
 * This is why rather than return a promise, we return a function that accepts a dispatch callback argument
 * */

/*
 * Components specify the intention to start an async operation without worrying which
 * actions get dispatched and when.
 */
const fetchTodos = (filter) => /* thunk */ (dispatch) => {
  /*
   * Thunk -> functions returned from other functions
   * It lets us dispatch multiple actions asynchronously
   * It can dispatch both plain object actions and other thunks
   * */
  dispatch(requestTodos(filter));
  api.fetchTodos(filter).then((response) => {
    dispatch(receiveTodos(filter, response));
  });
};

const toggleTodos = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});

const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export { addTodos, fetchTodos, toggleTodos, setVisibilityFilter };
