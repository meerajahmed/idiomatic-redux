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
const fetchTodos = (filter) =>
  api.fetchTodos(filter).then((response) => receiveTodos(filter, response));

const toggleTodos = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});

const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export { addTodos, fetchTodos, requestTodos, toggleTodos, setVisibilityFilter };
