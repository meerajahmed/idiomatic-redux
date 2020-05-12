import { combineReducers } from '../../../lib/redux';

const initialState = [];

// handle individual todos
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

const todos = (state = initialState, action) => {
  // this has two concerns how the array is updated and how an individual todo is updated.

  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)];
    case 'TOGGLE_TODO':
      // reducers can call other reducers to delegate the handling of some part of state they manage
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

/* const todoApp = (state = {}, action) => {
  // reducer composition
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  };
}; */

export { todos, visibilityFilter };

export default combineReducers({
  todos,
  visibilityFilter,
});
