import { v4 as uuid } from 'uuid';

const addTodos = (text) => ({
  type: 'ADD_TODO',
  id: uuid(),
  text,
});

const toggleTodos = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});

const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export { addTodos, toggleTodos, setVisibilityFilter };
