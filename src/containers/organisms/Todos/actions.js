import * as api from '../../../api';
import { getIsFetching } from './reducers';

const addTodos = (text) => (dispatch) =>
  api.addTodo(text).then((response) => {
    dispatch({
      type: 'ADD_TODO_SUCCESS',
      response,
    });
  });

const requestTodos = (filter) => ({
  type: 'FETCH_TODOS_REQUEST',
  filter,
});

const receiveTodos = (filter, response) => ({
  type: 'FETCH_TODOS_SUCCESS',
  filter,
  response,
});

const errorTodos = (filter, message) => ({
  type: 'FETCH_TODOS_FAILURE',
  filter,
  message,
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
const fetchTodos = (filter) => /* thunk */ (dispatch, getState) => {
  /*
   * conditionally dispatch actions to avoid unnecessary network requests and potential race conditions
   * */
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  /*
   * Thunk -> functions returned from other functions
   * It lets us dispatch multiple actions asynchronously
   * It can dispatch both plain object actions and other thunks
   * */
  dispatch(requestTodos(filter));
  return api.fetchTodos(filter).then(
    (response) => {
      dispatch(receiveTodos(filter, response));
    },
    (error) => {
      dispatch(errorTodos(filter, error.message || 'Something went wrong!'));
    }
  );
  /*
   * Recommendation: don't use Promise.catch in this scenario because if one of your reducers or
   * components throws while handling this action you'll get into the catch block and
   * so you'll display an internal error message to the user in all scenario
   * */
};

const toggleTodos = (id) => (dispatch) =>
  api.toggleTodo(id).then((response) => {
    dispatch({
      type: 'TOGGLE_TODO_SUCCESS',
      response,
    });
  });

const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export { addTodos, fetchTodos, toggleTodos, setVisibilityFilter };
